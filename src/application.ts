import * as $ from "jquery";

import {TodoItem, ItemManager} from "./data_items";

$(function ()
{
    let manager: ItemManager = new ItemManager();
    let newTask = null;
    let newTaskToggler = null;
    let itemTarget = null;

    function toggleNewTaskForm(): void
    {
        newTask.toggleClass("hidden");
    }

    function processNewTaskForm(event: Event)
    {
        event.preventDefault();
        let item: TodoItem = manager.createItem();

        item.subject = newTask[0].subject.value;

        updateItems();
    }

    function updateItems(): void
    {
        itemTarget.empty();

        for (let item of manager.getItems())
        {
            let row = $("<tr>");
            let id = $("<td>").text(item.id);
            let subject = $("<td>").text(item.subject);
            let createdAt = $("<td>").text(item.createdAt.toString());
            let action = $("<td>");

            row.append(id);
            row.append(name);
            row.append(subject);
            row.append(createdAt);
            row.append(action);

            itemTarget.append(row);
        }
    }

    function initialize()
    {
        newTask = $("#new-task-form");
        newTask.submit(processNewTaskForm);
        newTaskToggler = $("#toggle-new-task-form");
        newTaskToggler.click(toggleNewTaskForm);
        itemTarget = $("#item-target");
    }

    initialize();
});
