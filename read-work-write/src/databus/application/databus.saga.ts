import { Injectable } from '@nestjs/common';
import { ICommand, Saga, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';

@Injectable()
export class DataBusSagas {
  // @Saga()
  // test = (events$: Observable<any>): Observable<ICommand> => {
  //   return events$.pipe(
  //     ofType(DummyEvent),
  //     map((event) => new DummyCommand()),
  //   );
  // }
}
