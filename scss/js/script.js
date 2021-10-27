let menu = document.getElementById('menu');
let ShowMenuBar = document.getElementById('menu-bar');
menu.addEventListener("click" , ()=>{
    menu.classList.toggle('make-cancel-for-menu');
    if(ShowMenuBar.style.display === 'block'){
        ShowMenuBar.style.display = 'none';
    }else {
        ShowMenuBar.style.display = 'block';
    }
})
// ===================================================
let addbtn = document.getElementById('addbtn');
let last_note = [];
let value_input = document.querySelector('input');
// =======================================
addbtn.onclick = ()=>{
    if(value_input.value === '') {
        alert('You Must Fill This Filed');
    }
    else {
        // 2-get name of the input
        last_note.push(value_input.value);
        value_input.value = '';
        let last_item_name = last_note[last_note.length - 1];
        value_input.value = '';
        let body = document.getElementsByTagName('body')[0];
        let creat_shalst = document.createElement('div');
        body.appendChild(creat_shalst);
        creat_shalst.classList.add('show-all-list');
        creat_shalst.setAttribute('id',last_item_name);
        let creat_lst = document.createElement('div');
        creat_shalst.appendChild(creat_lst);
        creat_lst.classList.add('list');
        let creat_lname = document.createElement('div');
        creat_lst.appendChild(creat_lname);
        creat_lname.classList.add('lname');
        let creat_number_of_list = document.createElement('div');
        let icons = document.createElement('div');
        creat_lname.appendChild(creat_number_of_list);
        creat_lname.appendChild(icons);
        creat_number_of_list.classList.add('numberOlist');
        icons.classList.add('icons');
        let creat_ul = document.createElement('ul');
        creat_number_of_list.appendChild(creat_ul);
        let creat_li_for_ul = document.createElement('li');
        creat_li_for_ul.textContent = last_item_name;
        creat_ul.appendChild(creat_li_for_ul);
        let creat_img_2 = document.createElement('img');
        let creat_img_3 = document.createElement('img');
        creat_img_2.setAttribute('alt' , 'delete icon');
        creat_img_2.setAttribute('id' , giv_id_To_delete_icon(creat_img_2));
        creat_img_3.setAttribute('alt' , 'plus');
        creat_img_3.setAttribute('id' , giv_id_To_plus_icon(creat_img_3));
        creat_img_2.setAttribute('src' , './images & icons/delete icon.png');
        creat_img_3.setAttribute('src' , './images & icons/plus.png');
        icons.appendChild(creat_img_2);
        icons.appendChild(creat_img_3);
        a(i=0,li = last_note,last_item_name);
        creat_number_of_list.setAttribute('id' , giv_id_To_plus_icon(creat_number_of_list));
        let img_2_id = document.getElementById(creat_img_2.id);
        delete_icon_job(img_2_id , creat_shalst);
        let img_3_id = document.getElementById(creat_img_3.id);
        plus_btn_job(img_3_id , creat_shalst);
        ShowMenuBar.style.position = 'fixed';
    }
}
function giv_id_To_delete_icon(id) {
        id = '';
        let names = "asdqwezxcrfvbgtyhnmjuik,.lop;/'[]";
        let result = '';
        for(let i =0;i<=names.length;i++){
            result +=names.charAt(Math.floor(Math.random() * names.length));
        }
        id = result;
        return id;
}
function giv_id_To_plus_icon(img) {
    let numbers = '1234567890';
    let random_number = '';
    img = '';
    for(let i = 0 ; i<=numbers.length;i++){
        random_number+=numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    img = random_number;
    return img;

}
function delete_icon_job(id , main_list) {
    id.onclick = ()=>{
        console.log('Some One Ask For Delte');   
        let ask_for_delte = prompt('Do You Want To Delete This List?' , 'YES/NO');
        if(ask_for_delte === null){
            null;
        }
        else if(ask_for_delte === 'YES' || ask_for_delte === 'yes'){
            main_list.remove();
            last_note.pop(main_list.id);
            console.log('this div tag with id : [', main_list.id ,'] ', 'was deleted');
        }
        else if(ask_for_delte === "NO" || ask_for_delte === "no"){
            console.log("he/she did canceled");
            null;
        }
    }
}
// plus icon job
function plus_btn_job(icon , thelist){
    let ol = document.createElement('ol');
    icon.onclick = ()=>{
        let get_name_item = prompt('Enter A Name For You TODOLIST Item : ');
        li_content = document.createElement('li');
        li_content.textContent = get_name_item;
        ol.appendChild(li_content);
        thelist.appendChild(ol);
        if(get_name_item === ''){
            alert('dont let it empty');
            li_content.remove();
            ol.remove();
        }
    }
}
// Function for Same Name In Lists //        
function a(i,li = [],name){
        for(i ; i<=li.length - 2;i++){
            if(name === li[i]){
                console.log('same name');
                alert(name + " is Alredy Ecxist In You List");
                let a = document.getElementById(name);
                let div = document.querySelector('.show-all-list:last-child');
                div.remove();
                name = null;
            }
        }
        last_note.pop();
    }
// ================================================