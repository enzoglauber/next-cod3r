import CustomerRepository from '@/core/CustomerRepository'
import Customer from '@/core/customer'
import {
  DocumentReference,
  QueryDocumentSnapshot,
  SnapshotOptions,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from 'firebase/firestore'
import { db } from '..'

export default class CustomerCollection implements CustomerRepository {
  #collection = () => collection(db, 'customers').withConverter(this.#converter)
  #doc = (params: string): DocumentReference<Customer> =>
    doc(db, 'customers', params).withConverter(this.#converter)

  #converter = {
    toFirestore(customer: Customer) {
      return {
        // id: customer.id,
        name: customer.name,
        age: customer.age
      }
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Customer {
      const entity = snapshot?.data(options)
      return new Customer(entity.name, entity.age, snapshot.id)
    }
  }

  async save(customer: Customer): Promise<Customer> {
    const id = customer.id
    if (id) {
      const doc = this.#doc(id)
      await setDoc(doc, customer)
      return customer
    } else {
      const ref = await addDoc(this.#collection(), customer)
      return new Customer(customer.name, customer.age, ref.id)
    }
  }

  async remove(customer: Customer): Promise<void> {
    return await deleteDoc(this.#doc(`${customer.id}`))
  }

  async getAll(): Promise<Customer[]> {
    const query = await getDocs(this.#collection())
    return query.docs.map((doc) => doc.data())
  }
}
