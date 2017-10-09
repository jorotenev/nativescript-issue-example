# nativescript-issue-example
Repo illustrating an issue with the ListView of NativeScript

Upon loading the `list` page, some of the items' data are either not shown at all or only the `id` and the `timestamp` are shown (see the `demo.gif`). Scrolling down and then back up sometimes shows some of the previously hidden items.

Relevant files:
* `expense/list/list-view-model.ts` - adds items to the ListView
* `expense/list/list.ts`
* `expense/list/list.xml`