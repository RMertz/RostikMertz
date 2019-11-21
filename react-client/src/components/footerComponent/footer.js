import React, { Component } from 'react';

//<img src={require('./../images/github.png')} height="32px" width="32px" />
//<img src={require('./../images/linkedin.png')} height="32px" width="32px" /> 
class Footer extends Component {
  render() {
    return (
      <footer>
        <div class='github'>
						<p>
							<a href="https://github.com/RMertz?tab=repositories">
								github
							</a>
						</p>
        </div>
        <div class='linkedin'>
						<p>
							<a href="https://www.linkedin.com/in/rostik-mertz-06038b13a/">
								linkedin
							</a>
						</p>
        </div>
				<div class='contactInfo'> 
						<h3 class="blue"><small class="black">Start a </small>Conversation <small class="black">with me, lets </small> Talk</h3>
				</div>	
				<div class='contactInfoEmail'> 
						<p>
							<a href="antonmertz@gmail.com">email</a>
						</p>
				</div>	
      </footer>
    )
  }
}

export default Footer;
