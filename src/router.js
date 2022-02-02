import Home from "./routes/Home.svelte";
import LifeInsurance from "./routes/insurances/LifeInsurance.svelte";
import HealthInsurance from "./routes/insurances/HealthInsurance.svelte";
import GeneralInsurance from "./routes/insurances/GeneralInsurance.svelte";
import GeneralInsuranceDetail from "./routes/insurances/GeneralInsuranceDetail.svelte";
import InsuranceEdit from './routes/InsuranceEdit.svelte';
import Admin from "./routes/Admin.svelte";
import NotFound from "./routes/NotFound.svelte";


const routes = {
  // Exact path
  "/": Home,
  "/life": LifeInsurance,
  "/general": GeneralInsurance,
  "/general/:iid": GeneralInsuranceDetail,
  "/health": HealthInsurance,
  "/admin": Admin,
  "/edit/insurance/:iid": InsuranceEdit,
  "/edit/agent/:aid": InsuranceEdit,

  //   // Using named parameters, with last being optional
  //   "/author/:first/:last?": Author,

  //   // Wildcard parameter
  //   "/book/*": Book,

  // navigate progammatically
  //     import {push, pop, replace} from 'svelte-spa-router'

  // // The push(url) method navigates to another page, just like clicking on a link
  // push('/book/42')

  // // The pop() method is equivalent to hitting the back button in the browser
  // pop()

  // // The replace(url) method navigates to a new page, but without adding a new entry in the browser's history stack
  // // So, clicking on the back button in the browser would not lead to the page users were visiting before the call to replace()
  // replace('/book/3')

  // Get params from url
  //     <p>Your name is: <b>{params.first}</b> <b>{#if params.last}{params.last}{/if}</b></p>
  // <script>
  // //You need to define the component prop "params"
  // export let params = {}
  // </script>

  // Catch-all
  // This is optional, but if present it must be the last
  "*": NotFound,
};

export default routes;
