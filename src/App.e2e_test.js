Feature('Home Page')

Scenario('Land on homepage', (I) => {
    I.amOnPage('/')
    I.see('Mark As Read')
    I.see('Mark As Unread')
    I.see('Apply label')
    I.see('Remove label')
})