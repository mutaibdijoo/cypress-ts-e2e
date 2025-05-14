export class Utility {
  private readonly envi: string;
  public readonly Config = {
    production: {
      baseUrl: 'BASE_URL',
      loginUrl: 'LOGIN_URL',
      baseWebsocketUrl: 'WEBSOCKET_URL',
      baseApiUrl: 'API_URL',
      mqttAddress: 'MQTT_ADDRESS',
    },
    staging: {
      baseUrl: 'BASE_URL',
      loginUrl: 'LOGIN_URL',
      baseWebsocketUrl: 'WEBSOCKET_URL',
      baseApiUrl: 'API_URL',
      mqttAddress: 'MQTT_ADDRESS',
    },
  };

  constructor() {
    this.envi = Cypress.env('ENV'); // Get the value of environment variable i.e ENV
  }

  getHomePageUrl() {
    return 'HOME_PAGE_URL';
  }

  getBaseUrl() {
    return this.envi === 'production' ? this.Config.production.baseUrl : this.Config.staging.baseUrl;
  }

  getLoginUrl() {
    return this.envi === 'production' ? this.Config.production.loginUrl : this.Config.staging.loginUrl;
  }

  getBaseWebsocketUrl() {
    return this.envi === 'production' ? this.Config.production.baseWebsocketUrl : this.Config.staging.baseWebsocketUrl;
  }

  getBaseApiUrl() {
    return this.envi === 'production' ? this.Config.production.baseApiUrl : this.Config.staging.baseApiUrl;
  }

  getMqttAddress() {
    return this.envi === 'production' ? this.Config.production.mqttAddress : this.Config.staging.mqttAddress;
  }
}
