var dashObj='{"welcomeText":"Welcome to PHP Point Of Sale, choose a common task below to get started!","footerText":"Please visit our Website to learn the latest information about the project. You are using PHP Point Of Sale Version 17.7 Built on 11-09-2020 01:41 pm EST.","UpperLabels":[{"title":"Total sale","countLabel":"151","icon":"fa fa-lock"},{"title":"Total sale","countLabel":"151","icon":"fa fa-lock"},{"title":"Total sale","countLabel":"151","icon":"fa fa-lock"},{"title":"Total sale","countLabel":"151","icon":"fa fa-lock"}],"DownLabels":[{"title":"Total sale","icon":"fa fa-lock"},{"title":"Total sale","icon":"fa fa-lock"},{"title":"Total sale","icon":"fa fa-lock"},{"title":"Total sale","icon":"fa fa-lock"},{"title":"Total sale","icon":"fa fa-lock"}]}';

var customerr='{"customers": [{"edit":"edit", "id":1, "name":"nuaman", "email":"nuaman36@gmail.com", "phone":"0588128591","img":"images/dp.jpg"}],"editOptions":[{"title":"Excel Import", "icon":"fa fa-gear"}, {"title":"Excel Export", "icon":"fa fa-gear"},  {"title": "Custom Field Configuration","icon": "fa fa-gear", "link":"CustomerViews/CustomFieldConfig.html"},  {"title": " Permission Templates","icon": "fa fa-gear", "link":"CustomerViews/PermissionTemplates.html"}, {"title": "Manage Deleted Customers","icon": "fa fa-gear","link":"CustomerViews/ManageDeletedCustomers.html"}, {"title": "Clean Up old Customers","icon": "fa fa-refresh"}]}';

var itemKits='{"ItemKits": [{"edit":"edit", "id":1, "name":"nuaman","UPC":"nomi","Category Full Path":"nomi/mani", "CostPrice":"2000", "email":"nuaman36@gmail.com", "phone":"0588128591","img":"images/dp.jpg"}],"editOptions":[{"title":"Excel Export", "icon":"fa fa-gear"}, {"title":"Manage Categories", "icon":"fa fa-gear"},  {"title": "Manage Tags","icon": "fa fa-gear", "link":"CustomerViews/CustomFieldConfig.html"},  {"title": " Clean up old item kits","icon": "fa fa-refresh", "link":"CustomerViews/PermissionTemplates.html"}, {"title": "Manage Deleted ItemKits","icon": "fa fa-gear","link":"CustomerViews/ManageDeletedCustomers.html"}, {"title": "Custom Field Configuration","icon": "fa fa-refresh"}]}';

var priceRules='{"PriceRules": [{"edit":"edit", "id":1, "name":"nuaman","StartDate":"22/10/2010","EndDate":"22/10/2010", "RuleType":"2000", "Coupon":"1237654", "status":"on"}],"editOptions":[{"title":"Excel Export", "icon":"fa fa-gear"}, {"title":"Manage Categories", "icon":"fa fa-gear"},  {"title": "Manage Tags","icon": "fa fa-gear", "link":"CustomerViews/CustomFieldConfig.html"},  {"title": " Clean up old item kits","icon": "fa fa-refresh", "link":"CustomerViews/PermissionTemplates.html"}, {"title": "Manage Deleted ItemKits","icon": "fa fa-gear","link":"CustomerViews/ManageDeletedCustomers.html"}, {"title": "Custom Field Configuration","icon": "fa fa-refresh"}]}';



//index page
function Make_Upper_Labels(){
    var alllink="";
    var jsonStr=JSON.parse(dashObj);
    for(var x=0; x < jsonStr.UpperLabels.length;x++){
    var title=jsonStr.UpperLabels[x].title;
    var lbl=jsonStr.UpperLabels[x].countLabel;
    var icon=jsonStr.UpperLabels[x].icon;
    
    var temp='<div class="w3-col l3 s12 m6"><div class="w3-card-2 w3-light-gray  w3-display-container" ><div class="w3-left-align "><h3 class="fontsize">'+lbl+'</h3><h3>'+title+'</h3></div><div class="display-right dbc"> <i class="'+icon+'"></i> </div></div></div>';
    alllink=alllink+temp;
    
        }
        document.getElementById('upperLabels').innerHTML=alllink;
        document.getElementById('welcomeText').innerHTML=jsonStr.welcomeText;
    }

//index page 
    function Make_Down_Labels(){
        var alllink="";
        var jsonStr=JSON.parse(dashObj);
        for(var x=0; x < jsonStr.UpperLabels.length;x++){
        var title=jsonStr.DownLabels[x].title;
       
        var icon=jsonStr.DownLabels[x].icon;
        var temp='<div class="w3-col l6 "><div class="w3-card-2 w3-light-gray  w3-display-container  w3-padding-15 w3-border" ><i class="'+icon+'"></i> | <span  class="margin-left">'+title+'</span></div></div>';
        alllink=alllink+temp;
        }
            document.getElementById('downLabels').innerHTML=alllink;
            document.getElementById('footerText').innerHTML=jsonStr.footerText;
        }


//customers page
        function Make_Customers(){
            var  x, tbl = "";
            var myObj=JSON.parse(customerr);
            var tbl='<table><tr> <th>  <input class="w3-check" type="checkbox"></th> <th>Actions</th> <th>Id</th> <th>Name</th> <th>Email</th> <th>Phone</th> <th>Img</th> </tr>';
            //for(x=0; x<EmpObj.length;x++)
            for( x=0; x < myObj.customers.length;x++){
            var edit=myObj.customers[x].edit;
           var id=myObj.customers[x].id;
           var name=myObj.customers[x].name;
           var email=myObj.customers[x].email;
           var phone=myObj.customers[x].phone;
           var img=myObj.customers[x].img;
            tbl=tbl + '<tr>' +' <td><input class="w3-check" type="checkbox"></td>' + '<td><div class="btn-group"><button>Edit</button><button>. . .</button></td>' + '<td>' + id+ '</td>' + '<td>' + name +  '</td>' + '<td>' + email + '</td>' +  '<td>' + phone+ '</td>' +  '<td> <img src="'+img+'" width="45" height="45"></td>' + '</tr>';
            tbl=tbl + '</table>';
           }
           document.getElementById('customerData').innerHTML=tbl;
        }

//customers page

        function Make_Customers_Edit_Options(){
          var  x, temp = "";
            var myObj=JSON.parse(customerr);
         
            //for(x=0; x<EmpObj.length;x++)
           
            for( x=0; x < myObj.editOptions.length;x++){
            var title=myObj.editOptions[x].title;
           var icon=myObj.editOptions[x].icon;
           var link=myObj.editOptions[x].link;
           temp=temp + ' <a href="'+link+'"><i class="'+icon+'"> </i> '+ title +'</a> '; 
          
           }
        
               
                document.getElementById('editOption').innerHTML=temp;
        }


//itemKits
function Make_Item_Kits(){
    var  x, tbl = "";
    var myObj=JSON.parse(itemKits);
    var tbl='<table><tr> <th>  <input class="w3-check" type="checkbox"></th> <th>Actions</th> <th>Item Kit Id</th> <th>Name</th> <th>Email</th> <th>Phone</th> <th>costPrice</th> <th>UPC</th> <th>Img</th> </tr>';
    //for(x=0; x<EmpObj.length;x++)
    for( x=0; x < myObj.ItemKits.length;x++){
    var edit=myObj.ItemKits[x].edit;
   var id=myObj.ItemKits[x].id;
   var name=myObj.ItemKits[x].name;
   var email=myObj.ItemKits[x].email;
   var phone=myObj.ItemKits[x].phone;
   var img=myObj.ItemKits[x].img;
   var UPC=myObj.ItemKits[x].UPC;
   var costPrice=myObj.ItemKits[x].CostPrice;
    tbl=tbl + '<tr>' +' <td><input class="w3-check" type="checkbox"></td>' + '<td><div class="btn-group"><button>'+edit+'</button><button>. . .</button></td>' + '<td>' + id+ '</td>' + '<td>' + name +  '</td>' + '<td>' + email + '</td>' +  '<td>' + phone+ '</td>' +'<td>' +   costPrice+ '</td>'  +  '<td>' + UPC+ '</td>' + '<td> <img src="'+img+'" width="45" height="45"></td>'  +'</tr>';
    tbl=tbl + '</table>';
   }
   document.getElementById('itemKits').innerHTML=tbl;
}

//Items page
function Make_itemKits_Edit_Options(){
    var  x, temp = "";
            var myObj=JSON.parse(itemKits);
         
            //for(x=0; x<EmpObj.length;x++)
           
            for( x=0; x < myObj.editOptions.length;x++){
            var title=myObj.editOptions[x].title;
           var icon=myObj.editOptions[x].icon;
           var link=myObj.editOptions[x].link;
           temp=temp + ' <a href="'+link+'"><i class="'+icon+'"> </i> '+ title +'</a> '; 
          
           }
        
               
                document.getElementById('editItemOption').innerHTML=temp;
  }

  //Price rules
function Make_Price_Rules(){
    var  x, tbl = "";
    var myObj=JSON.parse(priceRules);
    var tbl='<table><tr> <th>  <input class="w3-check" type="checkbox"></th> <th>Actions</th> <th>Id</th> <th>Rule Name</th> <th>Start Date</th> <th>End Date</th> <th>Rule Type</th> <th>Coupon Code</th>  <th>status</th> </tr>';
    //for(x=0; x<EmpObj.length;x++)
    for( x=0; x < myObj.PriceRules.length;x++){
    var edit=myObj.PriceRules[x].edit;
    var name=myObj.PriceRules[x].name;
   var id=myObj.PriceRules[x].id;
   var startDate=myObj.PriceRules[x].StartDate;
   var endDate=myObj.PriceRules[x].EndDate;
   var ruleType=myObj.PriceRules[x].RuleType;
   var coupon=myObj.PriceRules[x].Coupon;
   var status=myObj.PriceRules[x].status;
  
    tbl=tbl + '<tr>' +' <td><input class="w3-check" type="checkbox"></td>' + '<td><div class="btn-group"><button>'+edit+'</button><button>. . .</button></td>' + '<td>' + id+ '</td>' + '<td>' + name +  '</td>' + '<td>' + startDate + '</td>' +  '<td>' + endDate+ '</td>' +'<td>' +   ruleType+ '</td>'  +  '<td>' + coupon+ '</td>' + '<td>' + status+ '</td>' + '</tr>';
    tbl=tbl + '</table>';
   }
   document.getElementById('priceRules').innerHTML=tbl;
}

// load
window.addEventListener('load',  MUL);
function  MUL(){
    Make_Upper_Labels();
    
  
} 
window.addEventListener('load',  MCEO);
function  MCEO(){
    Make_Customers_Edit_Options();
  
} 

window.addEventListener('load',  MDL);
function  MDL(){
    Make_Down_Labels();
  
} 

window.addEventListener('load',  MC);
function  MC(){
    Make_Customers();
  
} 

window.addEventListener('load',  MIK);
function  MIK(){
    Make_Item_Kits();
  
} 

window.addEventListener('load',  MPR);
function  MPR(){
    Make_Price_Rules();
  
} 

  

   