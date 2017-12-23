var  item=[{ barcode: 'ITEM000000',
              name: '可口可乐',
              unit: '瓶',
              price: 3.00},
            {
              barcode: 'ITEM000001',
              name: '百事薯片',
                unit:'包',
              price: 6.00},
            { barcode: 'ITEM000002',
              name: '苹果',
              unit: '斤',
              price: 7.00},
            { barcode: 'ITEM000003',
              name: '羽毛球',
              unit: '个',
              price: 2.00},
             ];
var discount=[
         {
           type: 'BUY_TWO_GET_ONE_FREE',
           barcodes: ['ITEM000000', 'ITEM000001']
         },
         {
         type: 'Wu_Zhe',
         barcodes: ['ITEM000003']
         }
      ];

var input= [
        'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000002-2',
    'ITEM000003',
    'ITEM000003',
    'ITEM000003'
];

var count=[0,0,0,0];

function jisuan(input) {
    for(var x in input)
    {
        if(input[x]=='ITEM000000') {count[0]++;}
    }
    for(var x in input)
    {
        if(input[x]=='ITEM000001')
        {
            count[1]++;
        }
    }
    for(var x in input)
    {
        if(input[x]=='ITEM000003') {count[3]++;}
    }
    for(var x in input)
    {
        var str=input[x].split("-")
        if(str[0]=='ITEM000002')
        {
                  count[2]=parseInt(str[1]);
        }
    }
}
var youhui=0.0;
var y=[0,0];
function zhekou() {
    for (var x in item) {
        var i=0;
        if(item[x].barcode==discount[0].barcodes)
        {
            y[i]=count[x]/2;
            count[x]=count[x]+y;
            youhui=youhui+parseFloat(y)*item[x].price;
            i++;
        }
        if(item[x].barcode==discount[1].barcodes)
        {
            youhui=youhui+parseFloat(item[x].price/2)*parseFloat(count[x]);
        }
    }
}
var totalpay=0;
function  main() {
   jisuan(input);
   for(var x=0;x<4;x++)
   {
       totalpay=totalpay+item[x].price*count[x];
   }
   zhekou();
   totalpay=totalpay-youhui;
}
function show() {
     main();
     document.write("***<没钱赚商店>购物清单***"+"<br>");
     for(var x in item)
     {
         document.write("商品名称："+item[x].name+"  "+"单价："+item[x].price+"   "+"数量："+count[x]+"   "+"小计:"+count[x]*item[x].price);
         document.write("<br>");
     }
     document.write("------------------------"+"<br>");
     document.write("总价："+totalpay+"<br>");
     document.write("优惠："+youhui+"<br>");
     document.write("***************************")
}