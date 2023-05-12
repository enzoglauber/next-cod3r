import Customer from './customer'

export default interface CustomerRepository {
  save(customer: Customer): Promise<Customer>
  remove(customer: Customer): void
  getAll(): Promise<Customer[]>
}
