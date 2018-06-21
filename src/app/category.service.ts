import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { 
  }

  getCategories() {
    return this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges();
  }
}
