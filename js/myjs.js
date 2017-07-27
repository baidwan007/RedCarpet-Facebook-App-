/**
 * Created by digvijay on 18/1/17.
 */

$(document).ready(function(){
    $('.carousel').carousel({
      padding: 200,
    });
    var obj={}
    var obj1={1:{1:5,2:3,3:2},2:{1:5,2:4,3:1},3:{1:5,2:4,3:1},4:{1:7,2:3},5:{1:5,2:4,3:1},6:{1:5,2:3,3:2},7:{1:7,2:3},8:{1:5,2:4,3:1},9:{1:4,2:5,3:1},10:{1:2,2:3,3:5,4:0},11:{1:3,2:7,3:0},12:{1:0,2:0,3:10}}
    console.log(obj1);
    var marks=0;
    $("#form-submitter").click(function(){
      var unanswered=[];
      console.log("hi")
      for(var i=1;i<13;i++){
        var str_form="form"+i;
        console.log(str_form);
        var select_val=$("#"+str_form+" input[type='radio']:checked").val();
        if(select_val==undefined){
          unanswered.push(i);
        }
        console.log(select_val);
        obj[i]=select_val;
        marksIndi=obj1[i]
        mark_quest=marksIndi[select_val]
        marks=marks+mark_quest;
      }
      console.log(unanswered.length)
      if(unanswered.length==0){
        console.log(marks)
        a=$("#result")
        console.log(a)
        marks=marks*7.5
        $("#result").html("<p>Your Score Is : "+marks+" out of 450</p>");
        console.log($('#meta1'))
        $('#meta1').attr("content","I got a score of "+marks+"/450")
        marks=0;
      }
      else{
        unanswered_string="";
        for(var i=0;i<unanswered.length;i++){
          if(i==unanswered.length-1){
            unanswered_string+=unanswered[i]
            break;
          }
          unanswered_string+=unanswered[i]+","
        }
        $("#result").html("Question No. "+unanswered_string+" are unanswered. Answer them to submit")
      }
    })
    $("input[type='radio']").click(function(){
      $(".carousel").carousel("next");
    })
})
