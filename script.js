var i=0
var p1_arr=[]
var p2_arr=[]
var p1c=0;
var p2c=0;
  function clicked(b_id)
  {
    if(p1_arr.includes(parseInt(b_id))|| p2_arr.includes(parseInt(b_id)))
    {
      alert('please select another button');
      return;
    }
    if(i==0 )
    {
      // $("#"+b_id).css('background-color','#34eba8');
      $("#"+b_id).css('background-image','url(download.png)')
      $("#p1").css('display','none');
      $("#p2").css('display','initial');
      i=1;
      p1_arr.push(parseInt(b_id));
      p1c++;
      if(p1c==3){
        p1_arr.sort();
      var ans=verify(p1_arr);
         if(ans==0){
        // alert("Player1 won");
        $('button').prop('disabled','true');
        $('#p1').text('palyer1 won');
        $("#p1").css('display','initial');
        $("#p2").css('display','none');
        $("#win1").css('display','initial');

      }
    }
    else if(p1c==4)
    {
      p1_arr.sort();
      p1_arr2=answers(p1_arr);
      for(var j=0;j<p1_arr2.length;j++)
      {
        ans=verify(p1_arr2[j]);
        if(ans==0){
        // alert("palyer1 won");
        $('button').prop('disabled','true');
        $("#p1").text('player 1 won');
        $("#p1").css('display','initial');
        $("#p2").css('display','none');
          $("#win1").css('display','initial');
      }
      }
    }
    }
    else
    {
    $("#"+b_id).css('background-image','url(download3.png)')
    $("#p1").css('display','initial');
    $("#p2").css('display','none');
      i=0;
      p2_arr.push(parseInt(b_id));
      p2c++;
      if(p2c==3)
      {p2_arr.sort();
        var ans=verify(p2_arr);
           if(ans==0){
          // alert("Player2 won");
          $('button').prop('disabled','true');
          $("#p2").text('player2 won');
          $("#p2").css('display','initial');
          $("#p1").css('display','none');
            $("#win2").css('display','initial');
          return;
        }

      }
      if(p2c==4)
      {
        p2_arr.sort();
        p2_arr2=answers(p2_arr);
        for(var j=0;j<p2_arr2.length;j++)
        {
          ans=verify(p2_arr2[j]);
          if(ans==0){
          // alert("palyer2 won");
            $('button').prop('disabled','true');
            $('#p2').text('player 2 won');
            $("#p2").css('display','initial');
            $("#p1").css('display','none');
              $("#win2").css('display','initial');
            return;
          }
        }
      }
    }
    if(p1c==4 && p2c==4){
    alert('match tie');
$('button').prop('disabled','true');
$("#p2").css('display','none');
  }
  }
  function verify(arr)
  {
    <!-- alert(arr); -->
    ans=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]]
    for(var i=0;i<ans.length;i++)
    {
      if(JSON.stringify(arr)==JSON.stringify(ans[i])){
     // alert('equal');
      return 0;
    }
    }
    return 1;
  }
  function answers(arr)
  {
     return [[arr[0],arr[1],arr[2]],[arr[0],arr[1],arr[3]],[arr[0],arr[2],arr[3]],[arr[1],arr[2],arr[3]]];
    // var an=[];
    // var data=[];
    // f2(arr,arr.length,3,0,data,0,an);
    // alert(an.length);
    // return an;
  }
  // function f2(arr,n,r,index,data,i,an)
  // {
  //   if(index==r)
  //   { answe=[]
  //     for(var j=0;j<r;j++)
  //     answe.push(data[j]);
  //     an.push(answe);
  //     return;
  //   }
  //   if(i>=n)
  //   return;
  //   data[index]=arr[i];
  //   f2(arr,n,r,index+1,data,i+1,an);
  //   f2(arr,n,r,index,data,i+1,an);
  // }
