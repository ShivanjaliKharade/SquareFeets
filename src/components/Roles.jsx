import React from 'react';
import Button from 'react-bootstrap/Button';



function Roles() {
  return (
    <div className='agent'>
        <div className ='a-heading'>
            <h1>Identify Yourself..!</h1>
            <h2>Expolre Your Area</h2>
        </div>

        <div class="row text-center">
  
  <div class="col-xl-4 col-sm-4 mb-4">
    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" margin-left="20" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
      <Button variant="warning" size="sm" >Admin</Button>{' '}
   
    </div>
  </div>



  <div class="col-xl-4 col-sm-4 mb-4">
    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
      <Button variant="warning" size="sm">User</Button>{' '}
     
    </div>
  </div>



  <div class="col-xl-4 col-sm-4 mb-4">
    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
      <Button variant="warning" size="sm">Builder</Button>{' '}
     </div>
  </div>
</div>






        
    </div>
  )
}

export default Roles;
