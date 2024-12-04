import { test, expect } from "../fixtures/shoppingCart-fixtures";

test.describe('Shopping Cart Page Validation', () => {


  test("Test Case 01 - Available Courses Section Validation", async ({ shoppingCartPage }) => {
    await expect(shoppingCartPage.heading).toHaveText("Available Courses");
  
    const count = await shoppingCartPage.threeCourses.count();
    expect(count).toBe(3);
  
    for(const image of await shoppingCartPage.threeImage.all()) {
      await expect(image).toBeVisible()
    }
  
    expect(shoppingCartPage.threeName).toHaveText(["SDET Course | Cypress Playwright", "Playwright Automation Testing", "Cypress Automation Course"])
    const counttag =  await shoppingCartPage.schoolTag.count();
    expect(counttag).toBe(3);
    expect(shoppingCartPage.priceTag).toHaveText(["$100", "$80", "$10"])
  
    for(const discount of await shoppingCartPage.firstTwoCoursesDiscount.all()){
  await expect(discount).toHaveAttribute('data-testid', 'discount')
    }
  
    for(const button of await shoppingCartPage.addCartButton.all()){
      await expect(button).toBeEnabled()
      await expect(button).toBeVisible()
      await expect(button).toHaveText(['Add to Cart'])
    }
  
  
    
  })


  test("Test Case 02 - Cart Section Validation", async ({ shoppingCartPage }) => {
   
  await expect(shoppingCartPage.cartHeading).toHaveText('Items Added to Cart')
  await expect(shoppingCartPage.totalPrice).toContainText('$0')
  //Validate that the cart is empty by default
  await expect(shoppingCartPage.pleaceOrderButton).toBeVisible()
  await expect(shoppingCartPage.pleaceOrderButton).toBeDisabled()
  await expect(shoppingCartPage.pleaceOrderButton).toHaveText('Place Order')
  
  
    
  })
  


  test("Test Case 03 - Add a Course to the Cart and Validate", async ({ shoppingCartPage }) => {
   
 await shoppingCartPage.addfirstCourse()
 const count = await shoppingCartPage.addedItemCart.count()
 expect(count).toBe(1)
  await shoppingCartPage.clickPlaceOrderButton()
  await expect(shoppingCartPage.successMessage).toHaveText('Your order has been placed.')

  const count2 = await shoppingCartPage.addedItemCart.count()
  expect(count2).toBe(0)
 
      
    })

    test("Test Case 04 - Add Two Courses to the Cart and Validate", async ({ shoppingCartPage }) => {
   
    await shoppingCartPage.addTwoCourses()
    const count = await shoppingCartPage.addedItemCart.count()
 expect(count).toBe(2)
 await shoppingCartPage.clickPlaceOrderButton()
 await expect(shoppingCartPage.successMessage).toHaveText('Your order has been placed.')
 const count2 = await shoppingCartPage.addedItemCart.count()
 expect(count2).toBe(0)
      
         
         
           
})

test("Test Case 05 - Add All Three Courses to the Cart and Validate", async ({ shoppingCartPage }) => {
   

await shoppingCartPage.addAllCourses()

const count = await shoppingCartPage.addedItemCart.count()
expect(count).toBe(3)
await shoppingCartPage.clickPlaceOrderButton()
await expect(shoppingCartPage.successMessage).toHaveText('Your order has been placed.')
const count2 = await shoppingCartPage.addedItemCart.count()
expect(count2).toBe(0)

       
         
})

    
})



