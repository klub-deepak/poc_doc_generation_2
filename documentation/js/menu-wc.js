'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">awesome-nestjs-boilerplate documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-fde49d6d806f4089c822ec1318e0dde5d46b1f3a9640c75f310aab781fa1268480760f9ec389c8d23a5b737ac457536d5503d2822aec24fbfd6d2640de71f289"' : 'data-target="#xs-controllers-links-module-AuthModule-fde49d6d806f4089c822ec1318e0dde5d46b1f3a9640c75f310aab781fa1268480760f9ec389c8d23a5b737ac457536d5503d2822aec24fbfd6d2640de71f289"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-fde49d6d806f4089c822ec1318e0dde5d46b1f3a9640c75f310aab781fa1268480760f9ec389c8d23a5b737ac457536d5503d2822aec24fbfd6d2640de71f289"' :
                                            'id="xs-controllers-links-module-AuthModule-fde49d6d806f4089c822ec1318e0dde5d46b1f3a9640c75f310aab781fa1268480760f9ec389c8d23a5b737ac457536d5503d2822aec24fbfd6d2640de71f289"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-fde49d6d806f4089c822ec1318e0dde5d46b1f3a9640c75f310aab781fa1268480760f9ec389c8d23a5b737ac457536d5503d2822aec24fbfd6d2640de71f289"' : 'data-target="#xs-injectables-links-module-AuthModule-fde49d6d806f4089c822ec1318e0dde5d46b1f3a9640c75f310aab781fa1268480760f9ec389c8d23a5b737ac457536d5503d2822aec24fbfd6d2640de71f289"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-fde49d6d806f4089c822ec1318e0dde5d46b1f3a9640c75f310aab781fa1268480760f9ec389c8d23a5b737ac457536d5503d2822aec24fbfd6d2640de71f289"' :
                                        'id="xs-injectables-links-module-AuthModule-fde49d6d806f4089c822ec1318e0dde5d46b1f3a9640c75f310aab781fa1268480760f9ec389c8d23a5b737ac457536d5503d2822aec24fbfd6d2640de71f289"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PublicStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthCheckerModule.html" data-type="entity-link" >HealthCheckerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthCheckerModule-32b2017ef41f84dc01b362aef50e7d7b7492aff4894340ae31237c5701f33153f7a851cdd2b9af10069d35cce7c944e4d14a0e9e09c39815055bbdefbf496960"' : 'data-target="#xs-controllers-links-module-HealthCheckerModule-32b2017ef41f84dc01b362aef50e7d7b7492aff4894340ae31237c5701f33153f7a851cdd2b9af10069d35cce7c944e4d14a0e9e09c39815055bbdefbf496960"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthCheckerModule-32b2017ef41f84dc01b362aef50e7d7b7492aff4894340ae31237c5701f33153f7a851cdd2b9af10069d35cce7c944e4d14a0e9e09c39815055bbdefbf496960"' :
                                            'id="xs-controllers-links-module-HealthCheckerModule-32b2017ef41f84dc01b362aef50e7d7b7492aff4894340ae31237c5701f33153f7a851cdd2b9af10069d35cce7c944e4d14a0e9e09c39815055bbdefbf496960"' }>
                                            <li class="link">
                                                <a href="controllers/HealthCheckerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthCheckerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthCheckerModule-32b2017ef41f84dc01b362aef50e7d7b7492aff4894340ae31237c5701f33153f7a851cdd2b9af10069d35cce7c944e4d14a0e9e09c39815055bbdefbf496960"' : 'data-target="#xs-injectables-links-module-HealthCheckerModule-32b2017ef41f84dc01b362aef50e7d7b7492aff4894340ae31237c5701f33153f7a851cdd2b9af10069d35cce7c944e4d14a0e9e09c39815055bbdefbf496960"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthCheckerModule-32b2017ef41f84dc01b362aef50e7d7b7492aff4894340ae31237c5701f33153f7a851cdd2b9af10069d35cce7c944e4d14a0e9e09c39815055bbdefbf496960"' :
                                        'id="xs-injectables-links-module-HealthCheckerModule-32b2017ef41f84dc01b362aef50e7d7b7492aff4894340ae31237c5701f33153f7a851cdd2b9af10069d35cce7c944e4d14a0e9e09c39815055bbdefbf496960"' }>
                                        <li class="link">
                                            <a href="injectables/ServiceHealthIndicator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceHealthIndicator</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PostModule-f17c4dd7f872f9fa4116263e636d8ed579e54abb9a1070ac0394a0d44944dfaf2a6bc5576d10fdfc110e57aa630d6b478a61b57a1823fb2eccbb1a272e4f7f17"' : 'data-target="#xs-controllers-links-module-PostModule-f17c4dd7f872f9fa4116263e636d8ed579e54abb9a1070ac0394a0d44944dfaf2a6bc5576d10fdfc110e57aa630d6b478a61b57a1823fb2eccbb1a272e4f7f17"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-f17c4dd7f872f9fa4116263e636d8ed579e54abb9a1070ac0394a0d44944dfaf2a6bc5576d10fdfc110e57aa630d6b478a61b57a1823fb2eccbb1a272e4f7f17"' :
                                            'id="xs-controllers-links-module-PostModule-f17c4dd7f872f9fa4116263e636d8ed579e54abb9a1070ac0394a0d44944dfaf2a6bc5576d10fdfc110e57aa630d6b478a61b57a1823fb2eccbb1a272e4f7f17"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-5900e3776737d9e246f88d510064afa0ed2036fec1e992e8dccfa02c952e55e8126c4ab9c88de9b2bda76e0f59ae75f6016b2da33e06e7cc0b534e15358e3ff4"' : 'data-target="#xs-injectables-links-module-SharedModule-5900e3776737d9e246f88d510064afa0ed2036fec1e992e8dccfa02c952e55e8126c4ab9c88de9b2bda76e0f59ae75f6016b2da33e06e7cc0b534e15358e3ff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-5900e3776737d9e246f88d510064afa0ed2036fec1e992e8dccfa02c952e55e8126c4ab9c88de9b2bda76e0f59ae75f6016b2da33e06e7cc0b534e15358e3ff4"' :
                                        'id="xs-injectables-links-module-SharedModule-5900e3776737d9e246f88d510064afa0ed2036fec1e992e8dccfa02c952e55e8126c4ab9c88de9b2bda76e0f59ae75f6016b2da33e06e7cc0b534e15358e3ff4"' }>
                                        <li class="link">
                                            <a href="injectables/ApiConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AwsS3Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AwsS3Service</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GeneratorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneratorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TranslationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidatorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-d081af88d467963a70288b3631e2c18317cee583bde8507e5d337d56f552ac52ed583d12220ef58ddd3f43aa22d62fcfdb0b388d51d884cc7d208e1b5bc11f3f"' : 'data-target="#xs-controllers-links-module-UserModule-d081af88d467963a70288b3631e2c18317cee583bde8507e5d337d56f552ac52ed583d12220ef58ddd3f43aa22d62fcfdb0b388d51d884cc7d208e1b5bc11f3f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-d081af88d467963a70288b3631e2c18317cee583bde8507e5d337d56f552ac52ed583d12220ef58ddd3f43aa22d62fcfdb0b388d51d884cc7d208e1b5bc11f3f"' :
                                            'id="xs-controllers-links-module-UserModule-d081af88d467963a70288b3631e2c18317cee583bde8507e5d337d56f552ac52ed583d12220ef58ddd3f43aa22d62fcfdb0b388d51d884cc7d208e1b5bc11f3f"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-d081af88d467963a70288b3631e2c18317cee583bde8507e5d337d56f552ac52ed583d12220ef58ddd3f43aa22d62fcfdb0b388d51d884cc7d208e1b5bc11f3f"' : 'data-target="#xs-injectables-links-module-UserModule-d081af88d467963a70288b3631e2c18317cee583bde8507e5d337d56f552ac52ed583d12220ef58ddd3f43aa22d62fcfdb0b388d51d884cc7d208e1b5bc11f3f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-d081af88d467963a70288b3631e2c18317cee583bde8507e5d337d56f552ac52ed583d12220ef58ddd3f43aa22d62fcfdb0b388d51d884cc7d208e1b5bc11f3f"' :
                                        'id="xs-injectables-links-module-UserModule-d081af88d467963a70288b3631e2c18317cee583bde8507e5d337d56f552ac52ed583d12220ef58ddd3f43aa22d62fcfdb0b388d51d884cc7d208e1b5bc11f3f"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserSettingsEntity.html" data-type="entity-link" >UserSettingsEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractClientService.html" data-type="entity-link" >AbstractClientService</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractDto.html" data-type="entity-link" >AbstractDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractEntity.html" data-type="entity-link" >AbstractEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUserSettings1639940635548.html" data-type="entity-link" >AddUserSettings1639940635548</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContextProvider.html" data-type="entity-link" >ContextProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSettingsCommand.html" data-type="entity-link" >CreateSettingsCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSettingsDto.html" data-type="entity-link" >CreateSettingsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSettingsHandler.html" data-type="entity-link" >CreateSettingsHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsers.html" data-type="entity-link" >CreateUsers</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsersTable1622299665807.html" data-type="entity-link" >CreateUsersTable1622299665807</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileNotImageException.html" data-type="entity-link" >FileNotImageException</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeneratorProvider.html" data-type="entity-link" >GeneratorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginPayloadDto.html" data-type="entity-link" >LoginPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageDto.html" data-type="entity-link" >PageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageMetaDto.html" data-type="entity-link" >PageMetaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageOptionsDto.html" data-type="entity-link" >PageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageTypeException.html" data-type="entity-link" >PageTypeException</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryFailedFilter.html" data-type="entity-link" >QueryFailedFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SnakeNamingStrategy.html" data-type="entity-link" >SnakeNamingStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenPayloadDto.html" data-type="entity-link" >TokenPayloadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundException.html" data-type="entity-link" >UserNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRegisterDto.html" data-type="entity-link" >UserRegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSettingsEntity.html" data-type="entity-link" >UserSettingsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSettingsRepository.html" data-type="entity-link" >UserSettingsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersPageOptionsDto.html" data-type="entity-link" >UsersPageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSubscriber.html" data-type="entity-link" >UserSubscriber</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthUserInterceptor.html" data-type="entity-link" >AuthUserInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExistsValidator.html" data-type="entity-link" >ExistsValidator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslationInterceptor.html" data-type="entity-link" >TranslationInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UniqueValidator.html" data-type="entity-link" >UniqueValidator</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Array.html" data-type="entity-link" >Array</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAbstractEntity.html" data-type="entity-link" >IAbstractEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IApiFile.html" data-type="entity-link" >IApiFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExistsValidationArguments.html" data-type="entity-link" >IExistsValidationArguments</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFile.html" data-type="entity-link" >IFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INumberFieldOptions.html" data-type="entity-link" >INumberFieldOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPageMetaDtoParameters.html" data-type="entity-link" >IPageMetaDtoParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStringFieldOptions.html" data-type="entity-link" >IStringFieldOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITranslationDecoratorInterface.html" data-type="entity-link" >ITranslationDecoratorInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUniqueValidationArguments.html" data-type="entity-link" >IUniqueValidationArguments</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserEntity.html" data-type="entity-link" >IUserEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserSettingsEntity.html" data-type="entity-link" >IUserSettingsEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryBuilder.html" data-type="entity-link" >QueryBuilder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectQueryBuilder.html" data-type="entity-link" >SelectQueryBuilder</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});