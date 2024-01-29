import './navbar.css'
import Image from 'next/image'

const Navbar = () => {
   return (
     <>
     
     <div className="Navbar-container">
        <div className='Navbar-logo-data-wallet'>
              <div className='Navbar-logo-data'>
              <Image className='Navbar-logo' src="/logo/Navbar/Fxdxlogo.svg" alt="fxdx-logo" width={100} height={100} />
               <div className='Navbar-data'>
                  <div className='Overview-navbar'>Overview</div>
                  <div className='Market-future-spot'>Futures</div>
                  <div className='Accounts'>Account</div>
                  <div className='Stake'>Stake</div>
                  <div className='Launch'>Launch</div>
                  <div className='Bridge'>Bridge</div>
               </div>
              </div>
              <div className='Navbar-wallet-network'>
                <div className='Navbar-wallet'>
                  <h3>Connect Wallet</h3> 
                </div>
                <div className='Navbar-network'>
                  <Image className='Arblogo' src="/logo/Navbar/Arbitrum.svg" alt="network-arb" width={20} height={20} />
                  <Image className='NetworkSwitch' src="/logo/Navbar/NetworkSw.svg" alt="network-switch" width={20} height={20} />
                </div>
              </div>
        </div>
     </div>
     
     </>
   )
}

export default Navbar