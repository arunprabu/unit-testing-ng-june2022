import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoService } from './services/todo.service';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let todoService: TodoService;

  const mockTodoList: any[] = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    }
  ]

  beforeEach(async () => {
    // this is similar to appmodule 
    await TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports: [ HttpClientModule],
      providers: [
        { 
          provide: TodoService,
          useValue: {
            // mocking service data
            getTodos: () => of(mockTodoList),
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService); // important as we inject this service in our comp 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* 3 Challenges or Disadvantages of Testing with Direct API request 
    1. time consuming 
    2. backend might not be stable 
    3. data inconsistencies may be there

    So Let's GO with MOCKING API Calls
  */

  it('[MOCKING] should have todoList from service ', ()=> {
    console.log('************ ' + component.todoList.length);
    expect(component.todoList).toEqual(mockTodoList)
  } );
  


});
