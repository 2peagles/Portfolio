import React from 'react'
import '../components/Contact.css'

export const Contact = () => {
  return (
    <div className='container' id='contact'>
        <div className="content">
        <article class="pa5 black-80 tracked ttu fw6 f6 ">
            <h1 className='ttu tc'>Get In touch</h1>
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
              <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                  <legend class="ph0 mh0 fw6 clip">Sumbit</legend>
                     <div class="mt3">
                        <label class="db lh-copy " for="name">Name</label>
                            <input class="pa2 ph5 input-reset ba bg-transparent w-100 measure pointer" type="email" name="name"  id="name"/>
                      </div>
                      <div class="mt3">
                          <label class="db lh-copy" for="Email-address">Email</label>
                          <input class="b pa2 ph5 input-reset ba bg-transparent pointer" type="email-address" name="email"  id="email"/>
                        </div>
                        <div class="mt3">
                          <label class="db lh-copy" for="Phone-number">Phone-number</label>
                          <input class="b pa2 ph5 input-reset ba bg-transparent pointer" type="phone-number" name="phone-number"  id="phone-number"/>
                        </div>
                    </fieldset>
                <div class="mt3 tc"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 br4 pointer " type="submit" value="Sumbit"/></div>
            </form>
        </article>
        </div>
    </div>
  )
}
