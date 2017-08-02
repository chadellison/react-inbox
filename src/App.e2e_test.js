Feature('Home Page')

Scenario('Land on homepage', (I) => {
    I.amOnPage('/')
    I.see('Mark As Read')
    I.see('Mark As Unread')
    I.see('Apply label')
    I.see('Remove label')
})

Scenario('User can see messages and subjects', (I) => {
    I.amOnPage('/')
    I.see("connecting the system won't do anything, we need to input the mobile AI panel!")
    //I.see("We need to index the mobile PCI bus!")

})