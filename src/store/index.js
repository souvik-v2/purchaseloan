import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    LoanPurpose: '',
    PropertyType: '',
    PropertyUse: '',
    CityState: '',
    HomeFoundIndicator: '',
    CurrentRealEstateAgentIndicator: '',
    PurchaseIntent: '',
    PurchasePrice:'',
    DownPaymentPercent: '',
    WhoDoYouBankWith: [],
    FirstTimeBuyer: '',
    CoBorrowerRequiredIndicator: '',
    AnnualIncome: '',
    EmploymentStatus: '',
    EstimatedCreditRating: '',
    DOB: [],
    VeteranIndicator: '',
    hasForeclosureOrBankruptcy: '',
    Foreclosure: '',
    Address: [],
    FullName: [],
    EmailAddress: '',
    PhoneNumber: '',
    SSN: '',
  },
  mutations: {
    initialiseStore(state) {
      for (var key in localStorage) {
        console.log(key, ' = ', localStorage[key]);
        //state.key = localStorage[key]
     }

      if (localStorage.getItem('LoanPurpose')) {
        state.LoanPurpose = localStorage.getItem('LoanPurpose');
      }
    },
    setLoanPurpose(state, payload) {
      localStorage.setItem('LoanPurpose', payload.LoanPurpose);
      state.LoanPurpose = payload.LoanPurpose;
    },
    setPropertyType(state, payload) {
      localStorage.setItem('PropertyType', payload.PropertyType);
      state.PropertyType = payload.PropertyType;
    },
    setPropertyUse(state, payload) {
      localStorage.setItem('PropertyUse', payload.PropertyUse);
      state.PropertyUse = payload.PropertyUse;
    },
    setCityState(state, payload) {
      localStorage.setItem('CityState', payload.CityState);
      state.CityState = payload.CityState;
    },
    setHomeFoundIndicator(state, payload) {
      localStorage.setItem('HomeFoundIndicator', payload.HomeFoundIndicator);
      state.HomeFoundIndicator = payload.HomeFoundIndicator;
    },
    setCurrentRealEstateAgentIndicator(state, payload) {
      localStorage.setItem('CurrentRealEstateAgentIndicator', payload.CurrentRealEstateAgentIndicator);
      state.CurrentRealEstateAgentIndicator = payload.CurrentRealEstateAgentIndicator;
    },
    setPurchaseIntent(state, payload) {
      localStorage.setItem('PurchaseIntent', payload.PurchaseIntent);
      state.PurchaseIntent = payload.PurchaseIntent;
    },
    setPurchasePrice(state, payload) {
      localStorage.setItem('PurchasePrice', payload.PurchasePrice);
      state.PurchasePrice = payload.PurchasePrice;
    },
    setDownPaymentPercent(state, payload) {
      localStorage.setItem('DownPaymentPercent', payload.DownPaymentPercent);
      state.DownPaymentPercent = payload.DownPaymentPercent;
    },
    setWhoDoYouBankWith(state, payload) {
      localStorage.setItem('WhoDoYouBankWith', payload.WhoDoYouBankWith);
      state.WhoDoYouBankWith = payload.WhoDoYouBankWith;
    },
    setFirstTimeBuyer(state, payload) {
      localStorage.setItem('FirstTimeBuyer', payload.FirstTimeBuyer);
      state.FirstTimeBuyer = payload.FirstTimeBuyer;
    },
    setCoBorrowerRequiredIndicator(state, payload) {
      localStorage.setItem('CoBorrowerRequiredIndicator', payload.CoBorrowerRequiredIndicator);
      state.CoBorrowerRequiredIndicator = payload.CoBorrowerRequiredIndicator;
    },
    setAnnualIncome(state, payload) {
      localStorage.setItem('AnnualIncome', payload.AnnualIncome);
      state.AnnualIncome = payload.AnnualIncome;
    },
    setEmploymentStatus(state, payload) {
      localStorage.setItem('EmploymentStatus', payload.EmploymentStatus);
      state.EmploymentStatus = payload.EmploymentStatus;
    },
    setEstimatedCreditRating(state, payload) {
      localStorage.setItem('EstimatedCreditRating', payload.EstimatedCreditRating);
      state.EstimatedCreditRating = payload.EstimatedCreditRating;
    },
    setDOB(state, payload) {
      localStorage.setItem('DOB', payload.DOB);
      state.DOB = payload.DOB;
    },
    setVeteranIndicator(state, payload) {
      localStorage.setItem('VeteranIndicator', payload.VeteranIndicator);
      state.VeteranIndicator = payload.VeteranIndicator;
    },
    sethasForeclosureOrBankruptcy(state, payload) {
      localStorage.setItem('hasForeclosureOrBankruptcy', payload.hasForeclosureOrBankruptcy);
      state.hasForeclosureOrBankruptcy = payload.hasForeclosureOrBankruptcy;
    },
    setForeclosure(state, payload) {
      localStorage.setItem('Foreclosure', payload.Foreclosure);
      state.Foreclosure = payload.Foreclosure;
    },
    setAddress(state, payload) {
      localStorage.setItem('Address', payload.Address);
      state.Address = payload.Address;
    },
    setFullName(state, payload) {
      localStorage.setItem('FullName', payload.FullName);
      state.FullName = payload.FullName;
    },
    setEmailAddress(state, payload) {
      localStorage.setItem('EmailAddress', payload.EmailAddress);
      state.EmailAddress = payload.EmailAddress;
    },
    setPhoneNumber(state, payload) {
      localStorage.setItem('PhoneNumber', payload.PhoneNumber);
      state.PhoneNumber = payload.PhoneNumber;
    },
    setSSN(state, payload) {
      localStorage.setItem('SSN', payload.SSN);
      state.SSN = payload.SSN;
    },
  },
  actions: {
  },
  modules: {
  }
})
