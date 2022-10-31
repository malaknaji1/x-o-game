let turn='X';
let squares=[];
let title=document.querySelector('.title');

function winner(index1,index2,index3){
    title.innerHTML="Winner Is "+squares[index1];
    document.getElementById('square'+index1).style.background='rgba(120, 168, 170, 0.651)';
    document.getElementById('square'+index2).style.background='rgba(120, 168, 170, 0.651)';
    document.getElementById('square'+index3).style.background='rgba(120, 168, 170, 0.651)';
    setInterval(function(){title.innerHTML+=' . '},1000);
    setTimeout(() => {
        location.reload();
    }, 5000);
}

function IsWinner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('square'+i).innerHTML;
    }

    if(squares[1] == squares[2] &&squares[1] == squares[3] && squares[1]!=''){
       winner(1,2,3);
        
    } 
    else if(squares[4] == squares[5] &&squares[4] == squares[6] && squares[4]!=''){
        winner(4,5,6);
    }
    else if(squares[7] == squares[8] &&squares[7] == squares[9] && squares[7]!=''){
        winner(7,8,9);
    }
    else if(squares[1] == squares[4] &&squares[1] == squares[7] && squares[1]!=''){
        winner(1,4,7);
    }
    else if(squares[2] == squares[5] &&squares[2] == squares[8] && squares[2]!=''){
        winner(2,5,8);
    }
    else if(squares[3] == squares[6] &&squares[3] == squares[9] && squares[3]!=''){
        winner(3,6,9);
    }
    else if(squares[1] == squares[5] &&squares[1] == squares[9] && squares[1]!=''){
        winner(1,5,9);
    }
    else if(squares[3] == squares[5] &&squares[3] == squares[7] && squares[3]!=''){
        winner(3,5,7);
    }
    else if(squares[1]!='' && squares[2]!=''&& squares[3]!=''&& squares[4]!=''&& squares[5]!=''&& squares[6]!=''&& squares[7]!='' && squares[8]!=''&& squares[9]!='' ){
        title.innerHTML="There Is No Winner  ";
        setInterval(function(){title.innerHTML+=' . '},1000);
        setTimeout(() => {
            location.reload();
        }, 5000);

    }
}

function game(id){
    let element =document.getElementById(id);
    if( element.innerHTML==''){
        if(turn =='X' ){
            element.innerHTML='X';
            turn='O';
            title.innerHTML='O';
        }
        else{
            element.innerHTML='O';
            turn='X';
            title.innerHTML='X';
        }
    }
    IsWinner();
}