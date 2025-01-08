import { Injectable } from '@angular/core';
import {Database, ref, set} from '@angular/fire/database';
import {Person} from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private database: Database) {
  }

  async savePerson(person: Person): Promise<void> {
    try {
      const personRef = ref(this.database, `persons/${person.uid}`); // Usa una ruta clara
      await set(personRef, person);
      console.log('Persona guardada exitosamente en la Realtime Database');
    } catch (error) {
      console.error('Error al guardar persona en Firebase:', error);
      throw error;
    }
  }
}
