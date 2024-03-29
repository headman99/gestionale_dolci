export const ROUTES = {
    AUTH:{
        LOGIN:'login',
        LOGOUT:'logout',
        GET_ACCESS_TOKEN:'accessToken',
        CSRF_TOKEN:'csrfToken',
        COMPLETE_CLIENT_REGISTRATION:'completeClientRegistration'
    },
    ADMIN:{
        REGISTER_INGREDIENT:'admin/registerIngredient',
        GET_STOCK:'admin/stocks',
        REMOVE_INGREDIENT:'admin/removeIngredient',
        UPDATE_INGREDIENT_QUANTITY:'admin/updateIngredientQuantity',
        UPDATE_INGREDIENT_DESCRIPTION:'admin/updateIngredientDescription',
        ADD_INGREDIENT_QUANTITY:'admin/addIngredientQuantity',
        GET_PRODUCTS_CATALOG:'admin/getProductsCatalog',
        REMOVE_PRODUCT:'admin/removeProduct',
        REGISTER_PRODUCT:'admin/registerProduct',
        GET_PRODUCT_GROUPS:'admin/getProductGroups',
        ADD_MENU_RECIPE :'admin/addMenuRecipe',
        REMOVE_MENU_RECIPE:'admin/removeMenuRecipe',
        UPDATE_MENU_RECIPE_GROUP:'admin/updateMenuRecipeGroup',
        UPDATE_MENU_RECIPE_SECTION:'admin/updateMenuRecipeSection',
        REMOVE_MENU_RECIPE_SECTION:'admin/removeMenuRecipeSection',
        REMOVE_MENU_RECIPE_GROUP:'/admin/removeMenuRecipeGroup',
        GET_ORDERS_LIST:'/admin/getOrdersList',
        GET_ORDERS_LIST_BY_DATE:'/admin/getOrdersListByDate',
        GET_OPEN_PRODUCTS_INSTANCE:'/admin/getOpenProductsInstance',
        GET_ORDER_LIST_CODES:'/admin/getOrderListCodes',
        SCAN_PRODUCT:'/admin/scanProduct',
        GET_PRODUCTS_INSTANCE_BY_FILTER:'/admin/getProductsInstanceByFilter',
        GET_TEAMS:'/admin/getTeams',
        GET_PRODUCT_LIST_BY_TEAM:'/admin/getProductListByTeam',
        CHECK_PRODUCT_LIST:'/admin/checkProductList',
        UPDATE_INGREDIENT:'/admin/updateIngredient',
        UPDATE_PRODUCT:'/admin/updateProduct',
        REMOVE_TEAM:'/admin/removeTeam',
        UPDATE_TEAM:'/admin/updateTeam',
        ADD_TEAM:'/admin/addTeam',
        GET_PRODUCTS_BY_TEAM:'/admin/getProductstByTeam',
        UPDATE_INGREDIENTS_TEAM:'/admin/updateIngredientsTeam',
        GET_INGREDIENTS_TEAM:'/admin/getIngredientsTeam',
        GET_PRODUCTS_LIST_BY_ORDER:'/admin/getTeamProductListByOrder',
        GET_TEAM_INGREDIENTS_BY_PRODUCT_RECIPE:'/admin/getTeamIngredientsByProductRecipe',
        GET_INGREDIENT_QUANTITY_BY_ORDER:'/admin/getIngredientQuantityByOrder',
        UPDATE_PRODUCT_RECIPE:'/admin/updateProductRecipe',
        DELETE_INGREDIENT_PRODUCT_RECIPE:'/admin/deleteIngredientProductRecipe',
        ADD_PRODUCT_RECIPE:'/admin/addProductRecipe',
        REGISTER_CLIENT:'/admin/registerClient',
        REGISTER_ADMIN:'/admin/registerAdmin',
        CHANGE_USER_PSW:'/admin/changeUserPsw',
        GET_USER_INFO:'/admin/getUsersInfo',
        DELETE_USER:'/admin/deleteUser',
        UPDATE_USER:'/admin/updateUser',
        GET_MENU_RECIPE_ALTERNATIVE:'/admin/getMenuRecipeAlternative',
        SCAN_ALL:'/admin/scanAll',
        UPDATE_MENU_RECIPE_RATIO:'/admin/updateMenuRecipeRatio',
        ADD_MENU_RECIPE_GROUP:'/admin/addMenuRecipeGroup',
        CREATE_MENU:'/admin/createMenu',
        UPDATE_MENU_ACTIVE:'/admin/updateMenuActive'
    },
    CUSTOMER:{
        ADD_ORDER_MENU:'client/addOrderMenu'
    },
    USER:{
        GET_MENU_CATALOG:'user/getMenuCatalog',
        GET_MENU_DETAILS:'user/getMenuDetails',
    }
}
