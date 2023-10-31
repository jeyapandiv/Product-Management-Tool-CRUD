


let editing = 0;

let pr_code = document.getElementById('p_code');
let pr_name = document.getElementById('p_name');
let pr_qnty = document.getElementById('p_quan');
let pr_price = document.getElementById('p_price');

document.getElementById('submit').addEventListener('click', function (sub) 
{
    sub.preventDefault()

    if (!editing) 
    {
        var tr = document.createElement('tr')
        tr.innerHTML = 
            '<td> ' + pr_code.value + '</td>' +
            '<td> ' + pr_name.value + '</td>' +
            '<td> ' + pr_qnty.value + '</td>' +
            '<td> ' + pr_price.value + '</td>' +
            '<td id="td_four"> <button id="edit_btn" onclick="Edit(this)">Edit</button>  <button id= "del_btn" onclick="delet(this)">Delete</button></td>';

        document.querySelector('table').append(tr);
    } 
    else 
    {
        update();
        document.getElementById('submit').innerText = 'Submit';
    }
    reset();
})

function update() 
{
    editing.getElementsByTagName('td')[0].innerHTML = pr_code.value;
    editing.getElementsByTagName('td')[1].innerHTML = pr_name.value;
    editing.getElementsByTagName('td')[2].innerHTML = pr_qnty.value;
    editing.getElementsByTagName('td')[3].innerHTML = pr_price.value;

    editing = 0;

}
function Edit(btn) 
{
    document.getElementById('submit').innerText = 'Update';
    editing = btn.parentElement.parentElement;

    pr_code.value = editing.getElementsByTagName('td')[0].innerHTML;
    pr_name.value = editing.getElementsByTagName('td')[1].innerHTML;
    pr_qnty.value = editing.getElementsByTagName('td')[2].innerHTML;
    pr_price.value = editing.getElementsByTagName('td')[3].innerHTML;
}

function delet(btn) 
{
    confirm("Do you want to remove")
    btn.parentElement.parentElement.remove();
}
function reset() 
{
    pr_code.value = '';
    pr_name.value = '';
    pr_qnty.value = '';
    pr_price.value = '';
}

