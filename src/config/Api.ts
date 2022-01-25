import random from "lodash/random";
import faker from "faker";
import { Observable } from "rxjs";

export enum Priority {
  Error,
  Warn,
  Info,
}

export interface IMessage {
  message: string;
  priority: Priority;
  id: string;
}

const observable = new Observable<IMessage>((subscriber) => {
  const generate = () => {
    const message = faker.lorem.sentence();
    const id = faker.datatype.uuid();
    const priority = random(0, 2) as Priority;
    const nextInMS = random(500, 3000);
    subscriber.next({ message, priority, id });
    setTimeout(generate, nextInMS);
  };
  generate();
});

const subscribe = (callback: (message: IMessage) => void) => {
  const subscription = observable.subscribe({
    next: callback,
  });

  return () => subscription.unsubscribe();
};

export default subscribe;
