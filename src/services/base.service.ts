import { Model, Document, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import PaginationOptions from '../interfaces/pagination.interface';
import SortOptions from '../interfaces/sort.interface';


export default class BaseService<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    const document = new this.model(data);
    return document.save();
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async find(query: FilterQuery<T> = {}, paginationOptions: PaginationOptions = { page: 1, limit: 10 }, sortOptions: SortOptions = { createdAt: 1 }): Promise<T[]> {
    const { page, limit } = paginationOptions;
    const skip = (page - 1) * limit;

    return this.model.find(query)
      .skip(skip)
      .limit(limit)
      .sort(sortOptions)
      .exec();
  }

  async update(id: string, updateData: UpdateQuery<T>, options: QueryOptions = { new: true }): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, updateData, options).exec();
  }

  async delete(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id).exec();
  }

  async countDocuments(query: FilterQuery<T>): Promise<number> {
    return this.model.countDocuments(query).exec();
  }
}
