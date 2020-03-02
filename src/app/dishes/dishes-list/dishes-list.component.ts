import { Component, OnInit } from '@angular/core';
import { Dish } from '../../shared/models/dish.model';
import { DishesService } from '../../shared/service/dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {

  title = 'Menu';

  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;
 
  constructor(private crudService: DishesService) { }
 
  ngOnInit() {
    this.crudService.create_Dishes().subscribe(data => {
 
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['DishName'],
          Age: e.payload.doc.data()['Description'],
          Address: e.payload.doc.data()['ImagePath'],
        };
      })
      console.log(this.students);
 
    });
  }
 
  CreateRecord() {
    const record: Dish = {
      DishName: this.studentName,
      Description: this.studentAge.toString(),
      ImagePath: this.studentAddress
    };
    this.crudService.create_NewDish(record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Dish(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['DishName'] = recordRow.EditName;
    record['Description'] = recordRow.EditAge;
    record['ImagePath'] = recordRow.EditAddress;
    this.crudService.update_Dish(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
