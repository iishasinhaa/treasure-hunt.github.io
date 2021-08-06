class Security{
    constructor(){
        this.access1= createInput("code");
        this.access1.position(100,90);
        this.button1=createButton('check');
        this.button1.position(100,120);

        this.access2= createInput("code");
        this.access2.position(700,190);
        this.button2=createButton('check');
        this.button2.position(700,220);

        this.access3= createInput("code");
        this.access3.position(100,290);
        this.button3=createButton('check');
        this.button3.position(100,320);
        }
        display(){
            this.button1.mousePressed(()=>{
                if(system.authenticate(accesscode1,this.access1.value())){
                    this.button1.hide();
                    this.access1.hide();
                    score++
                }        
            })

            this.button2.mousePressed(()=>{
                if(system.authenticate(accesscode2,this.access2.value())){
                    this.button2.hide();
                    this.access2.hide();
                    score++
                }        
            })

            this.button3.mousePressed(()=>{
                if(system.authenticate(accesscode3,this.access3.value())){
                    this.button3.hide();
                    this.access3.hide();
                    score++
                }        
            })

        }
}