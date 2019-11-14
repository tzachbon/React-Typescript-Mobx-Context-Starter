import { createContext } from "react";
import { observable, action, computed } from 'mobx'


export class Store {
    @observable count = 0

    @action.bound increment() {
        this.count++
    }

    @action.bound decrement() {
        this.count--
    }

    @computed get doubleCount() {
        return this.count * 2
    }
}

