import {createRouter, createWebHistory} from "vue-router";
import DestinationsComponent from "@/components/destinations.component.vue";
import LoginComponent from "@/components/login.component.vue";
import MyProfileComponent from "@/components/tourist-profile.component.vue";
import ContactUsComponent from "@/components/contact-us.component.vue";
import LandingView from "@/views/landing.view.vue";
import NotFoundView from "@/views/not-found.view.vue";
import ServiceInfoView from "@/views/service-info.view.vue";
import HomeEnterpriseView from "@/views/home-enterprise.view.vue";
import AddServiceView from "@/views/add-service.view.vue";
import RegisterComponent from "@/components/register.component.vue";
import FavoriteServiceView from "@/views/favorite-service.view.vue";

const routes = [
    {path: "/", component: LandingView},
    {path: "/destinations", component: DestinationsComponent},
    {path: "/login", component: LoginComponent},
    {path: "/register", component: RegisterComponent},
    {path: "/my-profile", component: MyProfileComponent},
    {path: "/contact-us", component: ContactUsComponent},
    {path: "/service-info", component: ServiceInfoView},
    {path: "/favorite-service", component: FavoriteServiceView},
    {path: "/enterprise/home", component: HomeEnterpriseView},
    {path: "/add-service", component: AddServiceView},
    {path: "/:pathMatch(.*)*", component: NotFoundView},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;