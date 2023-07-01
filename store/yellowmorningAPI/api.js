import axios from "axios"
const yellowmorningAPI = axios.create({
  baseURL: "https://food-tracking-41825.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return yellowmorningAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_appuser_list(payload) {
  return yellowmorningAPI.get(`/api/v1/appuser/`)
}
function api_v1_appuser_create(payload) {
  return yellowmorningAPI.post(`/api/v1/appuser/`, payload.data)
}
function api_v1_appuser_retrieve(payload) {
  return yellowmorningAPI.get(`/api/v1/appuser/${payload.id}/`)
}
function api_v1_appuser_update(payload) {
  return yellowmorningAPI.put(`/api/v1/appuser/${payload.id}/`, payload.data)
}
function api_v1_appuser_partial_update(payload) {
  return yellowmorningAPI.patch(`/api/v1/appuser/${payload.id}/`, payload.data)
}
function api_v1_appuser_destroy(payload) {
  return yellowmorningAPI.delete(`/api/v1/appuser/${payload.id}/`)
}
function api_v1_food_list(payload) {
  return yellowmorningAPI.get(`/api/v1/food/`)
}
function api_v1_food_create(payload) {
  return yellowmorningAPI.post(`/api/v1/food/`, payload.data)
}
function api_v1_food_retrieve(payload) {
  return yellowmorningAPI.get(`/api/v1/food/${payload.id}/`)
}
function api_v1_food_update(payload) {
  return yellowmorningAPI.put(`/api/v1/food/${payload.id}/`, payload.data)
}
function api_v1_food_partial_update(payload) {
  return yellowmorningAPI.patch(`/api/v1/food/${payload.id}/`, payload.data)
}
function api_v1_food_destroy(payload) {
  return yellowmorningAPI.delete(`/api/v1/food/${payload.id}/`)
}
function api_v1_foodcategory_list(payload) {
  return yellowmorningAPI.get(`/api/v1/foodcategory/`)
}
function api_v1_foodcategory_create(payload) {
  return yellowmorningAPI.post(`/api/v1/foodcategory/`, payload.data)
}
function api_v1_foodcategory_retrieve(payload) {
  return yellowmorningAPI.get(`/api/v1/foodcategory/${payload.id}/`)
}
function api_v1_foodcategory_update(payload) {
  return yellowmorningAPI.put(
    `/api/v1/foodcategory/${payload.id}/`,
    payload.data
  )
}
function api_v1_foodcategory_partial_update(payload) {
  return yellowmorningAPI.patch(
    `/api/v1/foodcategory/${payload.id}/`,
    payload.data
  )
}
function api_v1_foodcategory_destroy(payload) {
  return yellowmorningAPI.delete(`/api/v1/foodcategory/${payload.id}/`)
}
function api_v1_foodconsumption_list(payload) {
  return yellowmorningAPI.get(`/api/v1/foodconsumption/`)
}
function api_v1_foodconsumption_create(payload) {
  return yellowmorningAPI.post(`/api/v1/foodconsumption/`, payload.data)
}
function api_v1_foodconsumption_retrieve(payload) {
  return yellowmorningAPI.get(`/api/v1/foodconsumption/${payload.id}/`)
}
function api_v1_foodconsumption_update(payload) {
  return yellowmorningAPI.put(
    `/api/v1/foodconsumption/${payload.id}/`,
    payload.data
  )
}
function api_v1_foodconsumption_partial_update(payload) {
  return yellowmorningAPI.patch(
    `/api/v1/foodconsumption/${payload.id}/`,
    payload.data
  )
}
function api_v1_foodconsumption_destroy(payload) {
  return yellowmorningAPI.delete(`/api/v1/foodconsumption/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return yellowmorningAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return yellowmorningAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_user_list(payload) {
  return yellowmorningAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return yellowmorningAPI.post(`/api/v1/user/`, payload.data)
}
function api_v1_user_retrieve(payload) {
  return yellowmorningAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return yellowmorningAPI.put(`/api/v1/user/${payload.id}/`, payload.data)
}
function api_v1_user_partial_update(payload) {
  return yellowmorningAPI.patch(`/api/v1/user/${payload.id}/`, payload.data)
}
function api_v1_user_destroy(payload) {
  return yellowmorningAPI.delete(`/api/v1/user/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return yellowmorningAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return yellowmorningAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return yellowmorningAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return yellowmorningAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return yellowmorningAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return yellowmorningAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return yellowmorningAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return yellowmorningAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return yellowmorningAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return yellowmorningAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return yellowmorningAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_appuser_list,
  api_v1_appuser_create,
  api_v1_appuser_retrieve,
  api_v1_appuser_update,
  api_v1_appuser_partial_update,
  api_v1_appuser_destroy,
  api_v1_food_list,
  api_v1_food_create,
  api_v1_food_retrieve,
  api_v1_food_update,
  api_v1_food_partial_update,
  api_v1_food_destroy,
  api_v1_foodcategory_list,
  api_v1_foodcategory_create,
  api_v1_foodcategory_retrieve,
  api_v1_foodcategory_update,
  api_v1_foodcategory_partial_update,
  api_v1_foodcategory_destroy,
  api_v1_foodconsumption_list,
  api_v1_foodconsumption_create,
  api_v1_foodconsumption_retrieve,
  api_v1_foodconsumption_update,
  api_v1_foodconsumption_partial_update,
  api_v1_foodconsumption_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
