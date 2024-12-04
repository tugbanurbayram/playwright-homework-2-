import { type Locator, type Page } from "@playwright/test";

export class ShoppingCartPage {
  readonly page: Page
  readonly heading: Locator 
  readonly threeCourses: Locator
  readonly threeImage: Locator
  readonly threeName: Locator
  readonly schoolTag: Locator
  readonly priceTag: Locator
  readonly firstTwoCourses: Locator
  readonly firstTwoCoursesDiscount: Locator
  readonly firstCourse: Locator
  readonly addCartButton: Locator
  readonly addedItems: Locator
  readonly cartHeading: Locator
  readonly addedItemCart: Locator
  readonly totalPrice: Locator
  readonly pleaceOrderButton: Locator
  readonly successMessage: Locator


  constructor(page: Page) {
    this.page = page
    this.heading = page.getByRole('heading', { name: 'Available Courses' });
    this.threeCourses = page.locator('#course-1,#course-2,#course-3')
    this.threeImage = page.locator('[alt="Course 1"],[alt="Course 2"],[alt="Course 3"]')
    this.threeName = page.locator('.p-2>h3')
    this.schoolTag = page.locator('.my-3')
    this.priceTag = page.locator('[data-testid="full-price"]')
    this.firstTwoCourses = page.locator('#course-1,#course-2')
    this.firstTwoCoursesDiscount = page.getByTestId('discount')
    this.firstCourse = page.locator('#course-1')
    this.addCartButton = page.getByRole('button', {name: 'Add to Cart'})
    this.addedItems = page.locator('.course-card')
    this.cartHeading = page.getByText('Items Added to Cart')
    this.addedItemCart = page.locator('.course-card:not(.course-card-content)')
    this.totalPrice = page.locator('#total-price')
    this.pleaceOrderButton = page.getByText('Place Order')
    this.successMessage = page.locator('.is-success')
  }



  async goto() {
    await this.page.goto('https://www.techglobal-training.com/frontend/project-8')
  }

  async addfirstCourse() {
    await this.addCartButton.first().click()
  }

  async addTwoCourses() {
    await this.addCartButton.first().click()
    await this.addCartButton.nth(1).click()
  }

  async addAllCourses() {
    for(const course of await this.addCartButton.all()){
      await course.click()
    }
  }

  async clickPlaceOrderButton() {
    await this.pleaceOrderButton.click()
  }
}



