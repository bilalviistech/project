import { postWithFormData } from "../utils/helperFunction";

const createLandlordApi = (api) => {
  const addTenants = async (body, isFormData) => {
    if (isFormData) {
      return postWithFormData(api, "/landlord/tenant/addTenant", body);
    }
    return api.post("/landlord/tenant/addTenant", body);
  };
  const getAllTenant = async (body) => api.get(`/landlord/tenant/getAllTenant`);

  const addProperty = async (body, isFormData) => {
    if (isFormData) {
      return postWithFormData(api, "/landlord/property/addProperty", body);
    }
    return api.post("/landlord/property/addProperty", body);
  };
  const getAllPropertyRatio = async () =>
    api.get("/landlord/dashboard/allPropertyRatio");
  const getAllProperties = async () =>
    api.get("/landlord/property/getAllProperty");
  const getAllAssignedProperty = async (body) =>
    api.get(
      `/landlord/property/getAllAssignedProperty?page=${body?.page}&limit=${body?.limit}`,
      body
    );

  // Maintenence routes

  // const getAllPendingMaintenance = async (body) =>
  //   api.get(
  //     `/landlord/maintenance/getAllMaintenance?page=${body?.page}&limit=${body?.limit}`,
  //     body
  //   );
  const getAllPendingMaintenance = async (body) => {
    if (!body?.search) {
      return api.get(
        `/landlord/maintenance/getAllMaintenance?page=${body?.page}&limit=${body?.limit}`
      );
    } else {
      return api.get(
        `/landlord/maintenance/getAllMaintenance?page=${body?.page}&limit=${body?.limit}&search=${body?.search}`
      );
    }
  };

  const getAllMaintenanceCompleted = async (body) =>
    api.get(
      `/landlord/maintenance/getAllMaintenanceCompleted?page=${body?.page}&limit=${body?.limit}`,
      body
    );
  const _handleMaintenanceMarkAsCompleted = async (body) =>
    api.post(`/landlord/maintenance/completeMaintenance`, body);

  const getSingleProperty = async (id) =>
    api.get(`/landlord/property/getPropertyDetail/${id}`);
  const editProperty = async (id, body, isFormData) => {
    if (isFormData) {
      return postWithFormData(
        api,
        `/landlord/property/editProperty/${id}`,
        body
      );
    }
    return api.post(`/landlord/property/editProperty/${id}`, body);
  };
  const getLeaseExpiringSoon = async (body) =>
    api.get(
      `/landlord/lease/getLeaseExpiringSoon?page=${body?.page}&limit=${body?.limit}`
    );
  const getAllRenewedLease = async (body) =>
    api.get(
      `/landlord/lease/getAllRenewedLease?page=${body?.page}&limit=${body?.limit}`
    );
  const getAllVacantLease = async (body) =>
    api.get(
      `/landlord/lease/getAllVacantLease?page=${body?.page}&limit=${body?.limit}`,
      body
    );
  const getAllTenantsByProperty = async (body) =>
    api.get(
      `/landlord/property/getAllTenantsByProperty/${body?.id}?page=${body?.page}&limit=${body?.limit}`
    );
  const getLandlordProfile = async () => api.get("landlord/profile/getProfile");
  const updateLandlordProfile = async (updatedData) =>
    api.post("landlord/profile/saveProfile", updatedData);
  const landlordSaveProfileImg = async (body) =>
    api.post("/landlord/profile/saveProfileImg", body);
  const togglePhoneNumber = async () =>
    api.put("/landlord/profile/toggle-phone-number");
  const toggleEmail = async () => api.put("/landlord/profile/toggle-email");
  const updatePhoneNumber = async (body) =>
    api.put("/landlord/profile/update-number", body);
  const addSecondaryEmail = async (data) =>
    api.post("landlord/profile/add-secondary-email", data);
  const updatePassword = async (body) => api.put("/user/update-password", body);
  const removeSecondaryEmail = async () =>
    api.delete("/landlord/profile/remove-secondary-email");
  const getPaymentMethods = async () => api.get("/payment/");
  const addPaymentMethod = async (body) => api.post("/payment/add", body);
  const allOutStandingBalance = async (body) =>
    api.get("/landlord/dashboard/outStandingBalance");
  // const myRelatedAllPayments = async (body) =>
  // api.get("/payment/my-related-all-payments");
  const allPaymentMargin = async () =>
    api.get("/landlord/analytics/allPaymentMargin");
  const downloadAnalytics = (body) =>
    api.post("/landlord/analytics/download", body, { responseType: "blob" });
  const allExpensesTrends = async (body) =>
    api.get("/landlord/analytics/trend", body);
  const allExpensesTrendsByPropertyId = async (body) =>
    api.post("/landlord/analytics/trend-by-property", body);
  const allPropertiesForTrend = async () =>
    api.get("/landlord/analytics/getAllPropertyName");

  const allOverviewPayment = async (period) =>
    api.get(`/landlord/analytics/allOverviewPayment?period=${period}`);
  const myRelatedAllPayments = async (body) => {
    if (!body?.search) {
      return api.get(
        `/payment/my-related-all-payments?page=${body?.page}&limit=${body?.limit}`,
        body
      );
    } else {
      return api.get(
        `/payment/my-related-all-payments?page=${body?.page}&limit=${body?.limit}&search=${body?.search}`,
        body
      );
    }
  };

  const tenantPaymentHistoryByTenantId = async (id) =>
    api.get(`/payment/tenantPaymentHistoryByTenantId/${id}`);
  const getTenantsBalPay = async (id) =>
    api.get(`/landlord/tenant/getTenantsBalPay/${id}`);
  const getTenantByTenantId = async (id, limit) =>
    api.get(`/landlord/tenant/getTenantByTenantId/${id}?limit=${limit}`);
  const overviewIncomeExpense = async (period) =>
    api.get(`/landlord/dashboard/overviewIncomeExpense?period=${period}`);
  const allEvents = async (period = "2025-01") =>
    api.get(`/event/getEvent?month=${period}`);
  const getAllTransactionByPropId = async (body) =>
    api.get(
      `/landlord/property/getAllTransactionByPropId/${body?.id}?page=${body?.page}&limit=${body?.limit}`
    );
  const receiveRecentTransaction = async () =>
    api.get("/payment/receiveRecentTransaction");
  const paidExpectedRent = async (period) =>
    api.get(`/landlord/dashboard/paidExpectedRent?period=${period}`);

  const editEditLease = async (leaseId, body) =>
    api.post(`/landlord/lease/editLease/${leaseId}`, body);
  const LandlordGetAllInvoice = async (type) =>
    api.get(`/invoice/getAllInvoice/${type}`);
  const getAllLease = async (body) => {
    console.log("body", !body?.search);
    if (!body?.search) {
      // console.log("body?.search", body?.search);
      return api.get(
        `/landlord/lease/getAllLease?page=${body?.page}&limit=${body?.limit}`
      );
    } else {
      return api.get(
        `/landlord/lease/getAllLease?page=${body?.page}&limit=${body?.limit}&search=${body?.search}`
      );
    }
  };

  const landlordGetNotification = async () =>
    api.get("/notification/get-notification");
  const enable2FA = async () => api.post("/user/enable-2fa");
  const verify2FA = async () => api.post("/user/verify-2fa");
  const disable2FA = async () => api.post("/user/disable-2fa");
  const getAllTenants = async (body) =>
    api.get(`/landlord/tenant/getAllTenant`);
  const getAllInboxes = async () => api.get(`/chat/inbox`);
  const initiateChat = async (body) => api.post(`/chat/create-chat`, body);
  const getSpecificChat = async (chatId) =>
    api.get(`/chat/single-chat/${chatId}/messages`);
  const sendMessage = async (body) =>
    postWithFormData(api, "/chat/send-message", body);

  const terminateLease = async (propertyAssignId) =>
    api.post(`/landlord/lease/terminateLease/${propertyAssignId}`);
  const enablePhone2FA = async () => api.post("/user/enable-phone-2fa");
  const verifyPhone2FA = async (otp) => api.post("/user/verify-phone-2fa", otp);
  const disablePhone2FA = async () => api.post("/user/disable-phone-2fa");
  const disableVerifyPhone2FA = async (otp) =>
    api.post("/user/disable-verify-phone-2fa", otp);
  const InvoicePaymentManagement = async () =>
    api.get("/landlord/dashboard/InvoicePaymentManagement");
  const createStripeConnectAccount = async (body, isFormData) => {
    if (isFormData) {
      return postWithFormData(
        api,
        "/stripe/create-connected-bank-account",
        body
      );
    }
    return api.post("/stripe/create-connected-bank-account", body);
  };
  const getRequiredFields = async () => api.get("/stripe/get-required-fields");
  const getAccountStatue = async () => api.post("/stripe/get-account-status");
  const createPaymentIntent = async (data) =>
    api.post("/stripe/create-payment-intent", data);
  const sendRenwalReq = async (body) =>
    api.post(`/landlord/lease/sendRenwalReq/${body?.propertyAssignId}`, body);
  const getAllPropertyDocsByType = async (body) =>
    api.get(
      `/landlord/property/getAllPropertyDocs/${body?.type}?page=${body?.page}&limit=${body?.limit}`
    );
  const createBroadcastMessage = async (data) =>
    api.post("/chat/broadcast", data);
  // file upload
  const uploadMedia = async (body) => {
    return postWithFormData(api, "/user/upload-media", body);
  };
  const downloadMaintenanceReport = async () =>
    api.get("/landlord/maintenance/download-maintenance-report", {
      responseType: "blob",
    });

  const fetchRenewalNotifications = async (body) =>
    api.get(
      `/landlord/lease/all-renewal-notifications?page=${body?.page}&limit=${body?.limit}`
    );

  const handleAddNotificationPrefrences = async (body) =>
    api.post(`/user/add-notification-prefrences`, body);

  const getNotificationPref = async () => api.get(`/user/getNotificationPref`);

  const handleLandlordRentPay = async (propertyAssignId, body) =>
    api.post(`/payment/landlordRentPay/${propertyAssignId}`, body);

  // get my-subscription
  const getMySubscription = async () =>
    api.get(`/subscription/my-subscription`);
  const getAllSubscription = async () => api.get(`https://tvback.demomockserver.online/admin/list-subscriptions`);
  const cancelSubscription = async () =>
    api.delete(`/subscription/cancel-subscription`);

  return {
    addProperty,
    editProperty,
    getAllProperties,
    getSingleProperty,
    getAllAssignedProperty,
    addTenants,
    getAllTenant,
    getTenantByTenantId,
    getLeaseExpiringSoon,
    getAllRenewedLease,
    getAllVacantLease,
    getAllPropertyRatio,
    getAllTenantsByProperty,
    getLandlordProfile,
    updateLandlordProfile,
    landlordSaveProfileImg,
    togglePhoneNumber,
    toggleEmail,
    updatePhoneNumber,
    addSecondaryEmail,
    updatePassword,
    removeSecondaryEmail,
    getPaymentMethods,
    addPaymentMethod,
    getAllPendingMaintenance,
    getAllMaintenanceCompleted,
    _handleMaintenanceMarkAsCompleted,
    allOutStandingBalance,
    myRelatedAllPayments,
    allPaymentMargin,
    allExpensesTrends,
    allOverviewPayment,
    overviewIncomeExpense,
    tenantPaymentHistoryByTenantId,
    getTenantsBalPay,
    allEvents,
    getAllTransactionByPropId,
    receiveRecentTransaction,
    paidExpectedRent,
    editEditLease,
    LandlordGetAllInvoice,
    getAllLease,
    landlordGetNotification,
    enable2FA,
    verify2FA,
    disable2FA,
    getAllInboxes,
    getAllTenants,
    initiateChat,
    getSpecificChat,
    sendMessage,
    enablePhone2FA,
    verifyPhone2FA,
    disablePhone2FA,
    disableVerifyPhone2FA,
    InvoicePaymentManagement,
    terminateLease,
    createStripeConnectAccount,
    getRequiredFields,
    getAccountStatue,
    createPaymentIntent,
    sendRenwalReq,
    getAllPropertyDocsByType,
    uploadMedia,
    downloadMaintenanceReport,
    fetchRenewalNotifications,
    handleAddNotificationPrefrences,
    createBroadcastMessage,
    allPropertiesForTrend,
    allExpensesTrendsByPropertyId,
    downloadAnalytics,
    handleLandlordRentPay,
    getNotificationPref,
    getMySubscription,
    getAllSubscription,
    cancelSubscription,
  };
};

export default createLandlordApi;
