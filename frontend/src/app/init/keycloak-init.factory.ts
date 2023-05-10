import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
    keycloak.init({
      config: {
        url: 'http://keycloak:8080',
        realm: 'AF',
        clientId: 'af2'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
    keycloak.login()
}
