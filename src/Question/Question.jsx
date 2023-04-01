import React from 'react';

const Question = () => {
      return (
            <div className='w-[80%] mx-auto m-4 '>
                  <h1 className='text-3xl text-center p-4'>Queation & Answer part </h1>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-black rounded-box m-2 text-white">
                        <div className="collapse-title text-xl font-medium">
                              <p>1: Props vs state</p>
                        </div>
                        <div className="collapse-content">
                              <p>In the context of web development with React, props and state are both used to manage and update the data that is displayed on the user interface.</p>
                              <p>
                                    Props (short for "properties") are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component. The parent component sets the initial value for the prop, and then the child component can use the prop value to render its output.
                              </p>
                              <p>
                                    State, on the other hand, is used to manage data that can change within a component. State is initialized in the constructor of the component, and can be updated using the setState() method. When state is updated, React re-renders the component to reflect the new state.
                              </p>
                              <p>
                                    In summary, props are used to pass data down from a parent component to a child component, while state is used to manage data within a component that can change over time.
                              </p>
                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-black rounded-box m-2 text-white">
                        <div className="collapse-title text-xl font-medium">
                              2: How does useState work?
                        </div>
                        <div className="collapse-content">
                              <p>useState is a built-in hook in React that allows functional components to have state variables.</p>
                              <p>
                                    When you use the useState hook, you call it with an initial value for the state variable you want to use. It returns an array containing two elements: the current state value and a function that can be used to update the state.
                              </p>

                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-black rounded-box m-2 text-white">
                        <div className="collapse-title text-xl font-medium">
                              3: Purpose of useEffect without fetching datant
                        </div>
                        <div className="collapse-content">
                              <p>
                                    The useEffect hook in React is primarily used to manage side effects in functional components. While fetching data from an API is a common side effect, useEffect can also be used for a variety of other purposes, such as:
                              </p>
                              <p>

                                    Updating the title of the document: You can use useEffect to update the title of the document based on the state of the component. For example, you might want to update the title to reflect the current page or to display a notification if there are unsaved changes.
                              </p>
                              <p>Handling events: useEffect can be used to set up event listeners and handle events such as key presses, mouse clicks, or form submissions. This allows you to create more interactive and dynamic UIs.</p>
                              <p>
                                    Managing animations: useEffect can be used to manage animations or transitions based on changes in the component state. For example, you might want to fade in a new element when it is added to the page.</p>
                              <p>Managing timers: useEffect can be used to set up and manage timers or intervals for tasks that need to be repeated at regular intervals. For example, you might want to set up a timer to automatically refresh a list of items every few minutes</p>
                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-black rounded-box m-2 text-white">
                        <div className="collapse-title text-xl font-medium">
                              4: How does React work
                        </div>
                        <div className="collapse-content">
                              <p>React is a JavaScript library that allows developers to create user interfaces (UIs) for web applications. React works by using a component-based architecture, where UI elements are broken down into smaller, reusable components.</p>
                              <p>Here's an overview of how React works:</p>
                              <p>Components: React is built around the concept of components. Each component represents a part of the UI, and can be composed of other components. Components can receive data (called props) from their parent components, and can also have their own internal state.</p>
                              <p>
                                    Virtual DOM: React uses a virtual DOM (Document Object Model) to manage the UI. The virtual DOM is a lightweight representation of the actual DOM, and React uses it to efficiently update the UI when changes are made. When a component's state or props change, React generates a new virtual DOM tree and compares it to the previous one. It then updates only the parts of the actual DOM that have changed, resulting in faster and more efficient updates.</p>
                              <p>JSX: React uses a syntax called JSX (JavaScript XML) to define components. JSX is a way to write HTML-like syntax within JavaScript code, allowing developers to create complex UIs with ease</p>
                              <p>Data flow: React uses a unidirectional data flow, where data flows down from parent components to child components through props. Child components can also update the data by calling functions passed down through props, but cannot modify the data directly.</p>
                              <p>Hooks: React provides a set of hooks (such as useState and useEffect) that allow functional components to have state and manage side effects. This makes it easier to create and manage complex UIs without needing to use className components.</p>
                        </div>
                  </div>

            </div>
      );
};

export default Question;