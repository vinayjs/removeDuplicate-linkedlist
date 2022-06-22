// remove dups from sorted linked list
//sol - 1

var removeDups = function(head){

let cur = head;
 while(cur && cur.next){
    if(cur.val == cur.next.val){
        cur.next= cur.next.next;
    }
    else{
        cur = cur.next;
    }
 }
return head;

}



//solution -2 
var removeDups=function(head){
    let prev = head;
    let temp = prev.next;

    while(temp!=null){
        if(temp.val == prev.val){
            temp = temp.next;
            continue;
        }
        prev.next = temp;
        prev= temp;
        temp = temp.next;
    }
    prev.next= null;
    return head;

}







    
