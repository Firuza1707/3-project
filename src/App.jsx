import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      {/* header */}

      <header className="shadow">
        <div className="container py-2">
          <a href="#"><h3>Company name</h3></a>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Enterprice</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Pricing</a></li>
            <li> <button>Sign up</button></li>
          </ul>

        </div>
      </header>



      {/* section */}
      <section id='main'>
        <div className="container">
          <br /> <br />
          <h1>Pricing</h1>
          <p>Quickly build an effective pricing table for your pontential customers with this <br />
            Bootstrap example. It's built with default Bootstrap components and utilities <br /> with little  customization.</p>
          <br />
          </div>

          <div className='container-fluid'>

          <div className="row">
            <div className='.col-sm-6. col-md-4. col-lg-3 productCol'>
              <div className="productCard p-3 ">
              <div class="card-header bg-transparent border-success h11" >Free</div> <hr />
               <h1 >$0 <span>/ mo</span></h1>
                <p className='price mb-0'>10 users included</p>
                <p className='priceMonth mb-0'>2 GB of storage</p> <br />
                <p className='priceMonth mb-0'>Email support</p> <br />
                <p className='priceMonth mb-0'>Help center access</p> 
                <button className='mt-3'>Sign up for free</button>
              </div>
            </div>

            <div className='.col-sm-6. col-md-4. col-lg-3 productCol '>
              <div className="productCard p-3 ">
              <div class="card-header bg-transparent border-success h11" >Pro</div> <hr />
               <h1 >$0 <span>/ mo</span></h1>
                <p className='price mb-0'>10 users included</p>
                <p className='priceMonth mb-0'>2 GB of storage</p> <br />
                <p className='priceMonth mb-0'>Email support</p> <br />
                <p className='priceMonth mb-0'>Help center access</p> 
                <button className='mt-3 button1'>Sign up for free</button>
              </div>
            </div>

            <div className='.col-sm-6. col-md-4. col-lg-3 productCol '>
              <div className="productCard p-3 ">
              <div class="card-header bg-transparent border-success h11" >Enterprise</div> <hr />
               <h1 >$0 <span>/ mo</span></h1>
                <p className='price mb-0'>10 users included</p>
                <p className='priceMonth mb-0'>2 GB of storage</p> <br />
                <p className='priceMonth mb-0'>Email support</p> <br />
                <p className='priceMonth mb-0'>Help center access</p> 
                <button className='mt-3 button1'>Sign up for free</button>
              </div>
            </div>
            </div> <br /><br /><br /><br />
           
           
            <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
           
           <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
           <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>

          </div>
      </section>
  
    </div>
  );
}

export default App;
