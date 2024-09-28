import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Dhara', lastName: 'Rocha', email: 'contact@dhararocha.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Bobo'}
            subtext="Access and manage your account and transactions efficently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2423.67}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ $id: '1', currentBalance: 450.67, name: 'Bank 1'}, {$id: '2', currentBalance: 892.45, name: 'Bank 2'}]}/>
    </section>
  )
}

export default Home
