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
                    <a href="index.html" data-type="index-link">library documentation</a>
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
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-55043fde6743d2ef0b8ab42a884add5a824f24f682a811460fc3e311604ec190d2ddde5f27a50a118a4d5a3344d497ce38e92b1951b3c3625bbe697b327c4580"' : 'data-target="#xs-components-links-module-AppModule-55043fde6743d2ef0b8ab42a884add5a824f24f682a811460fc3e311604ec190d2ddde5f27a50a118a4d5a3344d497ce38e92b1951b3c3625bbe697b327c4580"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-55043fde6743d2ef0b8ab42a884add5a824f24f682a811460fc3e311604ec190d2ddde5f27a50a118a4d5a3344d497ce38e92b1951b3c3625bbe697b327c4580"' :
                                            'id="xs-components-links-module-AppModule-55043fde6743d2ef0b8ab42a884add5a824f24f682a811460fc3e311604ec190d2ddde5f27a50a118a4d5a3344d497ce38e92b1951b3c3625bbe697b327c4580"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComponentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComponentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AutocompleteModule.html" data-type="entity-link" >AutocompleteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AutocompleteModule-14bf913e8747591b817fe041d626ce3dcc808e7e9174b0184c0f43192a94a9f13726d9be1390f99856ff28ad27393b38e12a0ba93ecd13ad51ecef29f5921cd5"' : 'data-target="#xs-components-links-module-AutocompleteModule-14bf913e8747591b817fe041d626ce3dcc808e7e9174b0184c0f43192a94a9f13726d9be1390f99856ff28ad27393b38e12a0ba93ecd13ad51ecef29f5921cd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AutocompleteModule-14bf913e8747591b817fe041d626ce3dcc808e7e9174b0184c0f43192a94a9f13726d9be1390f99856ff28ad27393b38e12a0ba93ecd13ad51ecef29f5921cd5"' :
                                            'id="xs-components-links-module-AutocompleteModule-14bf913e8747591b817fe041d626ce3dcc808e7e9174b0184c0f43192a94a9f13726d9be1390f99856ff28ad27393b38e12a0ba93ecd13ad51ecef29f5921cd5"' }>
                                            <li class="link">
                                                <a href="components/AutocompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutocompleteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarModule.html" data-type="entity-link" >CalendarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalendarModule-6c3a5fe10b660f8218e4084eff6e9b256ff7c96bb87f8c3bf112ee186285188fa91593fb3a47a07ad4d55b6c8286f3fe5fc290def2288f8d9c27504ca8ab1c2d"' : 'data-target="#xs-components-links-module-CalendarModule-6c3a5fe10b660f8218e4084eff6e9b256ff7c96bb87f8c3bf112ee186285188fa91593fb3a47a07ad4d55b6c8286f3fe5fc290def2288f8d9c27504ca8ab1c2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalendarModule-6c3a5fe10b660f8218e4084eff6e9b256ff7c96bb87f8c3bf112ee186285188fa91593fb3a47a07ad4d55b6c8286f3fe5fc290def2288f8d9c27504ca8ab1c2d"' :
                                            'id="xs-components-links-module-CalendarModule-6c3a5fe10b660f8218e4084eff6e9b256ff7c96bb87f8c3bf112ee186285188fa91593fb3a47a07ad4d55b6c8286f3fe5fc290def2288f8d9c27504ca8ab1c2d"' }>
                                            <li class="link">
                                                <a href="components/CalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardModule.html" data-type="entity-link" >CardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardModule-f1126279840cea47a24ab600c2670c6b16a2179a0d4fe50c1802616dc92c24756b2fffc5911c7cb324bb4c8616c5499eaef307fc813be4515f64658aa7f7872b"' : 'data-target="#xs-components-links-module-CardModule-f1126279840cea47a24ab600c2670c6b16a2179a0d4fe50c1802616dc92c24756b2fffc5911c7cb324bb4c8616c5499eaef307fc813be4515f64658aa7f7872b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardModule-f1126279840cea47a24ab600c2670c6b16a2179a0d4fe50c1802616dc92c24756b2fffc5911c7cb324bb4c8616c5499eaef307fc813be4515f64658aa7f7872b"' :
                                            'id="xs-components-links-module-CardModule-f1126279840cea47a24ab600c2670c6b16a2179a0d4fe50c1802616dc92c24756b2fffc5911c7cb324bb4c8616c5499eaef307fc813be4515f64658aa7f7872b"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChartModule.html" data-type="entity-link" >ChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChartModule-0d0742464f74753804b65084cbd56eab150ec22bd56f8ba37202f7d9ecf0fecd3c11cd161f8c3ed3c1cec6cbb894ca034e9e53a89ede565df6502a6e5f83cf7d"' : 'data-target="#xs-components-links-module-ChartModule-0d0742464f74753804b65084cbd56eab150ec22bd56f8ba37202f7d9ecf0fecd3c11cd161f8c3ed3c1cec6cbb894ca034e9e53a89ede565df6502a6e5f83cf7d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartModule-0d0742464f74753804b65084cbd56eab150ec22bd56f8ba37202f7d9ecf0fecd3c11cd161f8c3ed3c1cec6cbb894ca034e9e53a89ede565df6502a6e5f83cf7d"' :
                                            'id="xs-components-links-module-ChartModule-0d0742464f74753804b65084cbd56eab150ec22bd56f8ba37202f7d9ecf0fecd3c11cd161f8c3ed3c1cec6cbb894ca034e9e53a89ede565df6502a6e5f83cf7d"' }>
                                            <li class="link">
                                                <a href="components/ChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckboxModule.html" data-type="entity-link" >CheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CheckboxModule-5ce724ada65bd904508d6d2f29b7ec15ac3d90cd1066a9ede4b85fd6356bd435809a3fe3a0bcc3c24d2016bab8172cb6731188c0658033bbffa09927e91ddcf2"' : 'data-target="#xs-components-links-module-CheckboxModule-5ce724ada65bd904508d6d2f29b7ec15ac3d90cd1066a9ede4b85fd6356bd435809a3fe3a0bcc3c24d2016bab8172cb6731188c0658033bbffa09927e91ddcf2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CheckboxModule-5ce724ada65bd904508d6d2f29b7ec15ac3d90cd1066a9ede4b85fd6356bd435809a3fe3a0bcc3c24d2016bab8172cb6731188c0658033bbffa09927e91ddcf2"' :
                                            'id="xs-components-links-module-CheckboxModule-5ce724ada65bd904508d6d2f29b7ec15ac3d90cd1066a9ede4b85fd6356bd435809a3fe3a0bcc3c24d2016bab8172cb6731188c0658033bbffa09927e91ddcf2"' }>
                                            <li class="link">
                                                <a href="components/CheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChipModule.html" data-type="entity-link" >ChipModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChipModule-be3547eb49c12447dca2452103fb281ed8bde99549ea6ed58cf60ecf161b928941898feb10a362072fc072e0465bb60019cd1f6a07c379b8baa602529ab7df34"' : 'data-target="#xs-components-links-module-ChipModule-be3547eb49c12447dca2452103fb281ed8bde99549ea6ed58cf60ecf161b928941898feb10a362072fc072e0465bb60019cd1f6a07c379b8baa602529ab7df34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChipModule-be3547eb49c12447dca2452103fb281ed8bde99549ea6ed58cf60ecf161b928941898feb10a362072fc072e0465bb60019cd1f6a07c379b8baa602529ab7df34"' :
                                            'id="xs-components-links-module-ChipModule-be3547eb49c12447dca2452103fb281ed8bde99549ea6ed58cf60ecf161b928941898feb10a362072fc072e0465bb60019cd1f6a07c379b8baa602529ab7df34"' }>
                                            <li class="link">
                                                <a href="components/ChipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChipComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ColorPickerModule.html" data-type="entity-link" >ColorPickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ColorPickerModule-0d3c8f3fc7fccd77cf28fde8a3c161ebab15a9fd3cecf6a176ca9a5ec6dfb2472470c28218fc6e64e5044d441450395205b14311c668ad862f0e0745c55abfa5"' : 'data-target="#xs-components-links-module-ColorPickerModule-0d3c8f3fc7fccd77cf28fde8a3c161ebab15a9fd3cecf6a176ca9a5ec6dfb2472470c28218fc6e64e5044d441450395205b14311c668ad862f0e0745c55abfa5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ColorPickerModule-0d3c8f3fc7fccd77cf28fde8a3c161ebab15a9fd3cecf6a176ca9a5ec6dfb2472470c28218fc6e64e5044d441450395205b14311c668ad862f0e0745c55abfa5"' :
                                            'id="xs-components-links-module-ColorPickerModule-0d3c8f3fc7fccd77cf28fde8a3c161ebab15a9fd3cecf6a176ca9a5ec6dfb2472470c28218fc6e64e5044d441450395205b14311c668ad862f0e0745c55abfa5"' }>
                                            <li class="link">
                                                <a href="components/ColorPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColorPickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentModule.html" data-type="entity-link" >ComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentModule-3a3aa4293487ebe2879d9901dc3db96098fad05455d0f1c78cecba662e6820a9a353886b42f812b5e1e7573aff7d75848cde8c7a768bfdd5604f66fdf5dcc9b9"' : 'data-target="#xs-components-links-module-ComponentModule-3a3aa4293487ebe2879d9901dc3db96098fad05455d0f1c78cecba662e6820a9a353886b42f812b5e1e7573aff7d75848cde8c7a768bfdd5604f66fdf5dcc9b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentModule-3a3aa4293487ebe2879d9901dc3db96098fad05455d0f1c78cecba662e6820a9a353886b42f812b5e1e7573aff7d75848cde8c7a768bfdd5604f66fdf5dcc9b9"' :
                                            'id="xs-components-links-module-ComponentModule-3a3aa4293487ebe2879d9901dc3db96098fad05455d0f1c78cecba662e6820a9a353886b42f812b5e1e7573aff7d75848cde8c7a768bfdd5604f66fdf5dcc9b9"' }>
                                            <li class="link">
                                                <a href="components/ApiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExamplesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExamplesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/componentRoutingModule.html" data-type="entity-link" >componentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesModule.html" data-type="entity-link" >CountriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CountriesModule-66459409658a867d77400aa661e79cbf55bb68f8a079785867fa247ccca37a949f35ae68eb4e6691052777cf6d3f2abbb31498d29b784c47378905b583b5bdf1"' : 'data-target="#xs-components-links-module-CountriesModule-66459409658a867d77400aa661e79cbf55bb68f8a079785867fa247ccca37a949f35ae68eb4e6691052777cf6d3f2abbb31498d29b784c47378905b583b5bdf1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CountriesModule-66459409658a867d77400aa661e79cbf55bb68f8a079785867fa247ccca37a949f35ae68eb4e6691052777cf6d3f2abbb31498d29b784c47378905b583b5bdf1"' :
                                            'id="xs-components-links-module-CountriesModule-66459409658a867d77400aa661e79cbf55bb68f8a079785867fa247ccca37a949f35ae68eb4e6691052777cf6d3f2abbb31498d29b784c47378905b583b5bdf1"' }>
                                            <li class="link">
                                                <a href="components/CountriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatePickerModule.html" data-type="entity-link" >DatePickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatePickerModule-fb406e5cf06550e919e70f9c9fe90857ed20dbcda04f2a3e167c45e46951de9b540b9f571d00dba5fce491e311a3ca800c581c5c9b79cf680404b576fc360ca4"' : 'data-target="#xs-components-links-module-DatePickerModule-fb406e5cf06550e919e70f9c9fe90857ed20dbcda04f2a3e167c45e46951de9b540b9f571d00dba5fce491e311a3ca800c581c5c9b79cf680404b576fc360ca4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatePickerModule-fb406e5cf06550e919e70f9c9fe90857ed20dbcda04f2a3e167c45e46951de9b540b9f571d00dba5fce491e311a3ca800c581c5c9b79cf680404b576fc360ca4"' :
                                            'id="xs-components-links-module-DatePickerModule-fb406e5cf06550e919e70f9c9fe90857ed20dbcda04f2a3e167c45e46951de9b540b9f571d00dba5fce491e311a3ca800c581c5c9b79cf680404b576fc360ca4"' }>
                                            <li class="link">
                                                <a href="components/DatePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatePickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DialogModule.html" data-type="entity-link" >DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DialogModule-2dc7e3f81bed11f9f122beb302aa9c16537405213fbf7651d7bbfcacfab635031389bc0cea35c8f14852f847dd6fef697d60f54653db0de521d0dce7f962cbd7"' : 'data-target="#xs-components-links-module-DialogModule-2dc7e3f81bed11f9f122beb302aa9c16537405213fbf7651d7bbfcacfab635031389bc0cea35c8f14852f847dd6fef697d60f54653db0de521d0dce7f962cbd7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DialogModule-2dc7e3f81bed11f9f122beb302aa9c16537405213fbf7651d7bbfcacfab635031389bc0cea35c8f14852f847dd6fef697d60f54653db0de521d0dce7f962cbd7"' :
                                            'id="xs-components-links-module-DialogModule-2dc7e3f81bed11f9f122beb302aa9c16537405213fbf7651d7bbfcacfab635031389bc0cea35c8f14852f847dd6fef697d60f54653db0de521d0dce7f962cbd7"' }>
                                            <li class="link">
                                                <a href="components/DialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventCardModule.html" data-type="entity-link" >EventCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EventCardModule-0b94de2390169ead3a4e7e5592eac0f8b5676868ec4fb3fc20b2450e0ab6215e26fe12986c5d24860e9359da2a492e2f31a41bd4c3da354321875698dbcf8739"' : 'data-target="#xs-components-links-module-EventCardModule-0b94de2390169ead3a4e7e5592eac0f8b5676868ec4fb3fc20b2450e0ab6215e26fe12986c5d24860e9359da2a492e2f31a41bd4c3da354321875698dbcf8739"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EventCardModule-0b94de2390169ead3a4e7e5592eac0f8b5676868ec4fb3fc20b2450e0ab6215e26fe12986c5d24860e9359da2a492e2f31a41bd4c3da354321875698dbcf8739"' :
                                            'id="xs-components-links-module-EventCardModule-0b94de2390169ead3a4e7e5592eac0f8b5676868ec4fb3fc20b2450e0ab6215e26fe12986c5d24860e9359da2a492e2f31a41bd4c3da354321875698dbcf8739"' }>
                                            <li class="link">
                                                <a href="components/EventCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FileModule-c924185199efa92a9b5abc9cf472bf014cc70683ec1ef6b7c5aa2618405c63bf2280352bee25ce1ed081d164f6924212dedc582c7cdbbd9335254fde8e7629a2"' : 'data-target="#xs-components-links-module-FileModule-c924185199efa92a9b5abc9cf472bf014cc70683ec1ef6b7c5aa2618405c63bf2280352bee25ce1ed081d164f6924212dedc582c7cdbbd9335254fde8e7629a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FileModule-c924185199efa92a9b5abc9cf472bf014cc70683ec1ef6b7c5aa2618405c63bf2280352bee25ce1ed081d164f6924212dedc582c7cdbbd9335254fde8e7629a2"' :
                                            'id="xs-components-links-module-FileModule-c924185199efa92a9b5abc9cf472bf014cc70683ec1ef6b7c5aa2618405c63bf2280352bee25ce1ed081d164f6924212dedc582c7cdbbd9335254fde8e7629a2"' }>
                                            <li class="link">
                                                <a href="components/FileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilterCardModule.html" data-type="entity-link" >FilterCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FilterCardModule-e1f817f60440ba9a1245ddd68cd8c97b337a7b440a0b0c344174924dd3d88b8e8b71050c38e16767fe92b8199c6da39512f0add03ead0858b22504ee2a3590f1"' : 'data-target="#xs-components-links-module-FilterCardModule-e1f817f60440ba9a1245ddd68cd8c97b337a7b440a0b0c344174924dd3d88b8e8b71050c38e16767fe92b8199c6da39512f0add03ead0858b22504ee2a3590f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FilterCardModule-e1f817f60440ba9a1245ddd68cd8c97b337a7b440a0b0c344174924dd3d88b8e8b71050c38e16767fe92b8199c6da39512f0add03ead0858b22504ee2a3590f1"' :
                                            'id="xs-components-links-module-FilterCardModule-e1f817f60440ba9a1245ddd68cd8c97b337a7b440a0b0c344174924dd3d88b8e8b71050c38e16767fe92b8199c6da39512f0add03ead0858b22504ee2a3590f1"' }>
                                            <li class="link">
                                                <a href="components/FilterCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpersModule.html" data-type="entity-link" >HelpersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-HelpersModule-94ab07c9bd38da660f07ab810a721335930fbd7e2dc37a00f102a333cf204322699a4121e36b9b532f363bbce93299f90e84d3d5633bac0efc088aba0f44c8b6"' : 'data-target="#xs-directives-links-module-HelpersModule-94ab07c9bd38da660f07ab810a721335930fbd7e2dc37a00f102a333cf204322699a4121e36b9b532f363bbce93299f90e84d3d5633bac0efc088aba0f44c8b6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HelpersModule-94ab07c9bd38da660f07ab810a721335930fbd7e2dc37a00f102a333cf204322699a4121e36b9b532f363bbce93299f90e84d3d5633bac0efc088aba0f44c8b6"' :
                                        'id="xs-directives-links-module-HelpersModule-94ab07c9bd38da660f07ab810a721335930fbd7e2dc37a00f102a333cf204322699a4121e36b9b532f363bbce93299f90e84d3d5633bac0efc088aba0f44c8b6"' }>
                                        <li class="link">
                                            <a href="directives/TooltipDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TooltipDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputChipsModule.html" data-type="entity-link" >InputChipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputChipsModule-ad206adc70060f014d3e65df98534109d44020b61e674fe1903604b0d87ec5a3a2987da03775f1b5f5c8f525d192fdeecbbf59b970b7f173712c965c5e1ad04c"' : 'data-target="#xs-components-links-module-InputChipsModule-ad206adc70060f014d3e65df98534109d44020b61e674fe1903604b0d87ec5a3a2987da03775f1b5f5c8f525d192fdeecbbf59b970b7f173712c965c5e1ad04c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputChipsModule-ad206adc70060f014d3e65df98534109d44020b61e674fe1903604b0d87ec5a3a2987da03775f1b5f5c8f525d192fdeecbbf59b970b7f173712c965c5e1ad04c"' :
                                            'id="xs-components-links-module-InputChipsModule-ad206adc70060f014d3e65df98534109d44020b61e674fe1903604b0d87ec5a3a2987da03775f1b5f5c8f525d192fdeecbbf59b970b7f173712c965c5e1ad04c"' }>
                                            <li class="link">
                                                <a href="components/InputChipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputChipsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessageModule.html" data-type="entity-link" >MessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MessageModule-b7b7f9652f63ef49b8882b6853ef42edc8311183e5871c267b502193dd04731bcc005e231a4dd539b567d7ca41e4b686d1ca60af83cbf4bfc40171bf278f2dae"' : 'data-target="#xs-components-links-module-MessageModule-b7b7f9652f63ef49b8882b6853ef42edc8311183e5871c267b502193dd04731bcc005e231a4dd539b567d7ca41e4b686d1ca60af83cbf4bfc40171bf278f2dae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessageModule-b7b7f9652f63ef49b8882b6853ef42edc8311183e5871c267b502193dd04731bcc005e231a4dd539b567d7ca41e4b686d1ca60af83cbf4bfc40171bf278f2dae"' :
                                            'id="xs-components-links-module-MessageModule-b7b7f9652f63ef49b8882b6853ef42edc8311183e5871c267b502193dd04731bcc005e231a4dd539b567d7ca41e4b686d1ca60af83cbf4bfc40171bf278f2dae"' }>
                                            <li class="link">
                                                <a href="components/MessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgxInterphaseModule.html" data-type="entity-link" >NgxInterphaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxInterphaseModule-7d2a059adced7a508c76a6c26179f4de320905fb4b6dad107e6c8bcb89959023eab01a98a97e4b1357950ba4ca1b550e6dc13e73f10e49907b7a7d1a3e6247b4"' : 'data-target="#xs-components-links-module-NgxInterphaseModule-7d2a059adced7a508c76a6c26179f4de320905fb4b6dad107e6c8bcb89959023eab01a98a97e4b1357950ba4ca1b550e6dc13e73f10e49907b7a7d1a3e6247b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxInterphaseModule-7d2a059adced7a508c76a6c26179f4de320905fb4b6dad107e6c8bcb89959023eab01a98a97e4b1357950ba4ca1b550e6dc13e73f10e49907b7a7d1a3e6247b4"' :
                                            'id="xs-components-links-module-NgxInterphaseModule-7d2a059adced7a508c76a6c26179f4de320905fb4b6dad107e6c8bcb89959023eab01a98a97e4b1357950ba4ca1b550e6dc13e73f10e49907b7a7d1a3e6247b4"' }>
                                            <li class="link">
                                                <a href="components/NgxInterphaseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgxInterphaseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PhoneModule.html" data-type="entity-link" >PhoneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PhoneModule-55aa023ad31d9ac839098852c641ea9b5b55f27ac930c93b2235bd0aba8e2f17e260066f9bb4d74992077d2000fc8812d9fe12370ca7247de9ac0c5eb5b0d68d"' : 'data-target="#xs-components-links-module-PhoneModule-55aa023ad31d9ac839098852c641ea9b5b55f27ac930c93b2235bd0aba8e2f17e260066f9bb4d74992077d2000fc8812d9fe12370ca7247de9ac0c5eb5b0d68d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PhoneModule-55aa023ad31d9ac839098852c641ea9b5b55f27ac930c93b2235bd0aba8e2f17e260066f9bb4d74992077d2000fc8812d9fe12370ca7247de9ac0c5eb5b0d68d"' :
                                            'id="xs-components-links-module-PhoneModule-55aa023ad31d9ac839098852c641ea9b5b55f27ac930c93b2235bd0aba8e2f17e260066f9bb4d74992077d2000fc8812d9fe12370ca7247de9ac0c5eb5b0d68d"' }>
                                            <li class="link">
                                                <a href="components/PhoneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PhoneModule-55aa023ad31d9ac839098852c641ea9b5b55f27ac930c93b2235bd0aba8e2f17e260066f9bb4d74992077d2000fc8812d9fe12370ca7247de9ac0c5eb5b0d68d"' : 'data-target="#xs-pipes-links-module-PhoneModule-55aa023ad31d9ac839098852c641ea9b5b55f27ac930c93b2235bd0aba8e2f17e260066f9bb4d74992077d2000fc8812d9fe12370ca7247de9ac0c5eb5b0d68d"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PhoneModule-55aa023ad31d9ac839098852c641ea9b5b55f27ac930c93b2235bd0aba8e2f17e260066f9bb4d74992077d2000fc8812d9fe12370ca7247de9ac0c5eb5b0d68d"' :
                                            'id="xs-pipes-links-module-PhoneModule-55aa023ad31d9ac839098852c641ea9b5b55f27ac930c93b2235bd0aba8e2f17e260066f9bb4d74992077d2000fc8812d9fe12370ca7247de9ac0c5eb5b0d68d"' }>
                                            <li class="link">
                                                <a href="pipes/PhonePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhonePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RadioModule.html" data-type="entity-link" >RadioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RadioModule-521aa968474772acc14a890faf1aca5ec59977c782256ca51a341ca05ef281b6e4105097462fc5ff1cbdd7bf5a9ef8612d8e18ef45b00d18eb5590fe290afc97"' : 'data-target="#xs-components-links-module-RadioModule-521aa968474772acc14a890faf1aca5ec59977c782256ca51a341ca05ef281b6e4105097462fc5ff1cbdd7bf5a9ef8612d8e18ef45b00d18eb5590fe290afc97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioModule-521aa968474772acc14a890faf1aca5ec59977c782256ca51a341ca05ef281b6e4105097462fc5ff1cbdd7bf5a9ef8612d8e18ef45b00d18eb5590fe290afc97"' :
                                            'id="xs-components-links-module-RadioModule-521aa968474772acc14a890faf1aca5ec59977c782256ca51a341ca05ef281b6e4105097462fc5ff1cbdd7bf5a9ef8612d8e18ef45b00d18eb5590fe290afc97"' }>
                                            <li class="link">
                                                <a href="components/RadioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReactiveInputModule.html" data-type="entity-link" >ReactiveInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReactiveInputModule-efb11ce15c999dfe14b8f5e54036799786997071a00deedfdb073ddd5dbac8f7a9d1cadc623e140b53bac5bed206ed14c1beb325d23590c9a2a888d27a5da150"' : 'data-target="#xs-components-links-module-ReactiveInputModule-efb11ce15c999dfe14b8f5e54036799786997071a00deedfdb073ddd5dbac8f7a9d1cadc623e140b53bac5bed206ed14c1beb325d23590c9a2a888d27a5da150"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReactiveInputModule-efb11ce15c999dfe14b8f5e54036799786997071a00deedfdb073ddd5dbac8f7a9d1cadc623e140b53bac5bed206ed14c1beb325d23590c9a2a888d27a5da150"' :
                                            'id="xs-components-links-module-ReactiveInputModule-efb11ce15c999dfe14b8f5e54036799786997071a00deedfdb073ddd5dbac8f7a9d1cadc623e140b53bac5bed206ed14c1beb325d23590c9a2a888d27a5da150"' }>
                                            <li class="link">
                                                <a href="components/ReactiveInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReactiveInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectLangModule.html" data-type="entity-link" >SelectLangModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectLangModule-ddad07d4cf0bc1dbe289e88e92105db6957d4eca753e38ce13c20184c7fb959e69a2b56a196d35c593179b7d2344232d0842f4175922d62fbc2ecde751860727"' : 'data-target="#xs-components-links-module-SelectLangModule-ddad07d4cf0bc1dbe289e88e92105db6957d4eca753e38ce13c20184c7fb959e69a2b56a196d35c593179b7d2344232d0842f4175922d62fbc2ecde751860727"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectLangModule-ddad07d4cf0bc1dbe289e88e92105db6957d4eca753e38ce13c20184c7fb959e69a2b56a196d35c593179b7d2344232d0842f4175922d62fbc2ecde751860727"' :
                                            'id="xs-components-links-module-SelectLangModule-ddad07d4cf0bc1dbe289e88e92105db6957d4eca753e38ce13c20184c7fb959e69a2b56a196d35c593179b7d2344232d0842f4175922d62fbc2ecde751860727"' }>
                                            <li class="link">
                                                <a href="components/SelectLangComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectLangComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectModule.html" data-type="entity-link" >SelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectModule-426ba8a1dbe1ac8ef82828271a81c51d2591dcfa023afe484f43ef98fea7161514a385974ea1632694bbceac95dcb6b7d5cffaa3b6bd8c9022fc4a8ceeb87427"' : 'data-target="#xs-components-links-module-SelectModule-426ba8a1dbe1ac8ef82828271a81c51d2591dcfa023afe484f43ef98fea7161514a385974ea1632694bbceac95dcb6b7d5cffaa3b6bd8c9022fc4a8ceeb87427"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectModule-426ba8a1dbe1ac8ef82828271a81c51d2591dcfa023afe484f43ef98fea7161514a385974ea1632694bbceac95dcb6b7d5cffaa3b6bd8c9022fc4a8ceeb87427"' :
                                            'id="xs-components-links-module-SelectModule-426ba8a1dbe1ac8ef82828271a81c51d2591dcfa023afe484f43ef98fea7161514a385974ea1632694bbceac95dcb6b7d5cffaa3b6bd8c9022fc4a8ceeb87427"' }>
                                            <li class="link">
                                                <a href="components/SelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link" >SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidebarModule-b167e9b7cacf70a75b7454f492dd625646f222976ecc8d988a00d1390346a6ac6b128104aa4157c0090bae69682886ad65fc7342bcad6452e6f00e20916dfc3e"' : 'data-target="#xs-components-links-module-SidebarModule-b167e9b7cacf70a75b7454f492dd625646f222976ecc8d988a00d1390346a6ac6b128104aa4157c0090bae69682886ad65fc7342bcad6452e6f00e20916dfc3e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-b167e9b7cacf70a75b7454f492dd625646f222976ecc8d988a00d1390346a6ac6b128104aa4157c0090bae69682886ad65fc7342bcad6452e6f00e20916dfc3e"' :
                                            'id="xs-components-links-module-SidebarModule-b167e9b7cacf70a75b7454f492dd625646f222976ecc8d988a00d1390346a6ac6b128104aa4157c0090bae69682886ad65fc7342bcad6452e6f00e20916dfc3e"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SwitcherModule.html" data-type="entity-link" >SwitcherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SwitcherModule-8ac4ac5f3a6cf9a522a7dcf612899777ef09ca39576cdb1b11ecb781e129f0aaec28dc90ee6badfb9653c6c1848c5b0848e8d4b19b7c79db7a0f5dd845099590"' : 'data-target="#xs-components-links-module-SwitcherModule-8ac4ac5f3a6cf9a522a7dcf612899777ef09ca39576cdb1b11ecb781e129f0aaec28dc90ee6badfb9653c6c1848c5b0848e8d4b19b7c79db7a0f5dd845099590"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SwitcherModule-8ac4ac5f3a6cf9a522a7dcf612899777ef09ca39576cdb1b11ecb781e129f0aaec28dc90ee6badfb9653c6c1848c5b0848e8d4b19b7c79db7a0f5dd845099590"' :
                                            'id="xs-components-links-module-SwitcherModule-8ac4ac5f3a6cf9a522a7dcf612899777ef09ca39576cdb1b11ecb781e129f0aaec28dc90ee6badfb9653c6c1848c5b0848e8d4b19b7c79db7a0f5dd845099590"' }>
                                            <li class="link">
                                                <a href="components/SwitcherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SwitcherComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TableModule-e3a3dc5494fde268105e9a4f5989747aaa35f4d78e696573be7727898f867ca87902465de11e8d9f4b4e9fc32c1ef1f9fce097a961458b15eea9b85917a22183"' : 'data-target="#xs-components-links-module-TableModule-e3a3dc5494fde268105e9a4f5989747aaa35f4d78e696573be7727898f867ca87902465de11e8d9f4b4e9fc32c1ef1f9fce097a961458b15eea9b85917a22183"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TableModule-e3a3dc5494fde268105e9a4f5989747aaa35f4d78e696573be7727898f867ca87902465de11e8d9f4b4e9fc32c1ef1f9fce097a961458b15eea9b85917a22183"' :
                                            'id="xs-components-links-module-TableModule-e3a3dc5494fde268105e9a4f5989747aaa35f4d78e696573be7727898f867ca87902465de11e8d9f4b4e9fc32c1ef1f9fce097a961458b15eea9b85917a22183"' }>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-TableModule-e3a3dc5494fde268105e9a4f5989747aaa35f4d78e696573be7727898f867ca87902465de11e8d9f4b4e9fc32c1ef1f9fce097a961458b15eea9b85917a22183"' : 'data-target="#xs-pipes-links-module-TableModule-e3a3dc5494fde268105e9a4f5989747aaa35f4d78e696573be7727898f867ca87902465de11e8d9f4b4e9fc32c1ef1f9fce097a961458b15eea9b85917a22183"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TableModule-e3a3dc5494fde268105e9a4f5989747aaa35f4d78e696573be7727898f867ca87902465de11e8d9f4b4e9fc32c1ef1f9fce097a961458b15eea9b85917a22183"' :
                                            'id="xs-pipes-links-module-TableModule-e3a3dc5494fde268105e9a4f5989747aaa35f4d78e696573be7727898f867ca87902465de11e8d9f4b4e9fc32c1ef1f9fce097a961458b15eea9b85917a22183"' }>
                                            <li class="link">
                                                <a href="pipes/OrderPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TextareaModule.html" data-type="entity-link" >TextareaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TextareaModule-90ff10e39911dd3e000baa19a2eee7902dd0d0dd20b97a9d97ce9372a887708ad30d0075de90935868aa38b4b8bf01f5463bf8a9fe46b2cb9540aa4a9127312f"' : 'data-target="#xs-components-links-module-TextareaModule-90ff10e39911dd3e000baa19a2eee7902dd0d0dd20b97a9d97ce9372a887708ad30d0075de90935868aa38b4b8bf01f5463bf8a9fe46b2cb9540aa4a9127312f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TextareaModule-90ff10e39911dd3e000baa19a2eee7902dd0d0dd20b97a9d97ce9372a887708ad30d0075de90935868aa38b4b8bf01f5463bf8a9fe46b2cb9540aa4a9127312f"' :
                                            'id="xs-components-links-module-TextareaModule-90ff10e39911dd3e000baa19a2eee7902dd0d0dd20b97a9d97ce9372a887708ad30d0075de90935868aa38b4b8bf01f5463bf8a9fe46b2cb9540aa4a9127312f"' }>
                                            <li class="link">
                                                <a href="components/TextareaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextareaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TimePickerModule.html" data-type="entity-link" >TimePickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TimePickerModule-5ed492c936becc454303c6941ef3f25880d1d21383f02e3d946f98cf6f1c96ab3bc03fdc7fa501ea8b9b195feb8862101f2c93182d166a9f42de3f053cad02f5"' : 'data-target="#xs-components-links-module-TimePickerModule-5ed492c936becc454303c6941ef3f25880d1d21383f02e3d946f98cf6f1c96ab3bc03fdc7fa501ea8b9b195feb8862101f2c93182d166a9f42de3f053cad02f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TimePickerModule-5ed492c936becc454303c6941ef3f25880d1d21383f02e3d946f98cf6f1c96ab3bc03fdc7fa501ea8b9b195feb8862101f2c93182d166a9f42de3f053cad02f5"' :
                                            'id="xs-components-links-module-TimePickerModule-5ed492c936becc454303c6941ef3f25880d1d21383f02e3d946f98cf6f1c96ab3bc03fdc7fa501ea8b9b195feb8862101f2c93182d166a9f42de3f053cad02f5"' }>
                                            <li class="link">
                                                <a href="components/TimePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimePickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WindowModule.html" data-type="entity-link" >WindowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WindowModule-4924c93d18fa85a8722642cdab28f26c6c67b64484ab2eedaa3198eaf2a22733946caea1f897bcd77384da8901c7e081e725d0271cbb745ba457b62fdfaf51cd"' : 'data-target="#xs-components-links-module-WindowModule-4924c93d18fa85a8722642cdab28f26c6c67b64484ab2eedaa3198eaf2a22733946caea1f897bcd77384da8901c7e081e725d0271cbb745ba457b62fdfaf51cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WindowModule-4924c93d18fa85a8722642cdab28f26c6c67b64484ab2eedaa3198eaf2a22733946caea1f897bcd77384da8901c7e081e725d0271cbb745ba457b62fdfaf51cd"' :
                                            'id="xs-components-links-module-WindowModule-4924c93d18fa85a8722642cdab28f26c6c67b64484ab2eedaa3198eaf2a22733946caea1f897bcd77384da8901c7e081e725d0271cbb745ba457b62fdfaf51cd"' }>
                                            <li class="link">
                                                <a href="components/WindowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WindowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HomeCardComponent.html" data-type="entity-link" >HomeCardComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/RippleDirective.html" data-type="entity-link" >RippleDirective</a>
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
                                <a href="classes/Api.html" data-type="entity-link" >Api</a>
                            </li>
                            <li class="link">
                                <a href="classes/CalendarEvent.html" data-type="entity-link" >CalendarEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Chart.html" data-type="entity-link" >Chart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckBoxClass.html" data-type="entity-link" >CheckBoxClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChipClass.html" data-type="entity-link" >ChipClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountClass.html" data-type="entity-link" >CountClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatePickerClass.html" data-type="entity-link" >DatePickerClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Example.html" data-type="entity-link" >Example</a>
                            </li>
                            <li class="link">
                                <a href="classes/Filters.html" data-type="entity-link" >Filters</a>
                            </li>
                            <li class="link">
                                <a href="classes/GettersAndSetters.html" data-type="entity-link" >GettersAndSetters</a>
                            </li>
                            <li class="link">
                                <a href="classes/Method.html" data-type="entity-link" >Method</a>
                            </li>
                            <li class="link">
                                <a href="classes/Overview.html" data-type="entity-link" >Overview</a>
                            </li>
                            <li class="link">
                                <a href="classes/PhoneClass.html" data-type="entity-link" >PhoneClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Property.html" data-type="entity-link" >Property</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadioClass.html" data-type="entity-link" >RadioClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReactiveInputClass.html" data-type="entity-link" >ReactiveInputClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectClass.html" data-type="entity-link" >SelectClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/TextereaClass.html" data-type="entity-link" >TextereaClass</a>
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
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DateService.html" data-type="entity-link" >DateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NgxInterphaseService.html" data-type="entity-link" >NgxInterphaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link" >ThemeService</a>
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
                                <a href="interfaces/Component.html" data-type="entity-link" >Component</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Day.html" data-type="entity-link" >Day</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CharPipe.html" data-type="entity-link" >CharPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/MaxPipe.html" data-type="entity-link" >MaxPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/StringPipe.html" data-type="entity-link" >StringPipe</a>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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