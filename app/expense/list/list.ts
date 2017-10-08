import {EventData} from "tns-core-modules/data/observable";
import {ItemEventData, ListView} from "tns-core-modules/ui/list-view";
import {Page} from "tns-core-modules/ui/page";

import {ListExpenseModel} from "./list-view-model";
import {IExpense} from "~/models/expense";

let listModel = new ListExpenseModel();
let page: Page;

export function navigatingTo(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = listModel;
}

export function loadMoreItems(ev: EventData): void {
    listModel.loadMoreItems(ev);
}


export function onTap(ev: ItemEventData): void {
    let itemIndex: number = ev.index;
    let expense: IExpense = listModel.expenses.getItem(itemIndex);
    console.log(`onTap: {'id': ${expense.id}, 'amount': ${expense.amount}}`)
}
