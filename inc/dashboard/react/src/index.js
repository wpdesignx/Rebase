/**
 * Internal dependencies
 */
import HelpTab from './help';
import ChangelogTab from './changelog';
import ProSettings from './pro-extension';
import RecommendedTab from './recomended';
import StarterTab from './starter';
import Sidebar from './sidebar';
import CustomizerLinks from './customizer';
import Notices from './notices';

/**
 * WordPress dependencies
 */
 import { __, sprintf } from '@wordpress/i18n';
const { registerCoreBlocks } = wp.blockLibrary;
const { hasFilter } = wp.hooks;
import { Fragment, Component, RawHTML, render } from '@wordpress/element';
import { TabPanel, Panel, PanelBody, PanelRow, Button } from '@wordpress/components';

class BaseDashboard extends Component {
	render() {
		const tabs = [
			{
				name: 'dashboard',
				title: __( 'Dashboard', 'rebase' ),
				className: 'base-dash-tab',
			},
			{
				name: 'help',
				title: __( 'Getting Started', 'rebase' ),
				className: 'base-help-tab',
			},
			{
				name: 'changelog',
				title: __( 'Changelog', 'rebase' ),
				className: 'base-changelog-tab',
			},
			// {
			// 	name: 'recommended',
			// 	title: __( 'Recommended Plugins', 'rebase' ),
			// 	className: 'base-recommended-tab',
			// },
			// {
			// 	name: 'starter',
			// 	title: __( 'Starter Templates', 'rebase' ),
			// 	className: 'base-starter-tab',
			// },
		];

		const BaseDashTabPanel = () => (
			<TabPanel className="base-dashboard-tab-panel"
				activeClass="active-tab"
				tabs={ tabs }>
				{
					( tab ) => {
						switch ( tab.name ) {
							case 'dashboard':
								return (
									<Panel className="dashboard-section tab-section">
										<PanelBody
											opened={ true }
										>
											<div className="dashboard-modules-wrapper">
												<div className="dashboard-customizer-settings">
													<CustomizerLinks />
												</div>
												<div className="dashboard-pro-settings">
													<ProSettings />
												</div>
											</div>
										</PanelBody>
									</Panel>
								);

							case 'help':
								return (
									<Panel className="help-section tab-section">
										<PanelBody
											opened={ true }
										>
											<HelpTab />
										</PanelBody>
									</Panel>
								);
							case 'changelog':
								return (
									<Panel className="changelog-section tab-section">
										<PanelBody
											opened={ true }
										>
											<ChangelogTab />
										</PanelBody>
									</Panel>
								);

							case 'recommended':
								return (
									<Panel className="recommended-section tab-section">
										<PanelBody
											opened={ true }
										>
											<RecommendedTab />
										</PanelBody>
									</Panel>
								);

							case 'starter':
								return (
									<Panel className="starter-section tab-section">
										<PanelBody
											opened={ true }
										>
											<StarterTab />
										</PanelBody>
									</Panel>
								);
						}
					}
				}
			</TabPanel>
		);

		const MainPanel = () => (
			<div className="tab-panel">
				<BaseDashTabPanel />
			</div>
		);

		return (
			<Fragment>
				<MainPanel />
				<Notices />
			</Fragment>
		);
	}
}

wp.domReady( () => {
	render(
		<BaseDashboard />,
		document.querySelector( '.base_theme_dashboard_main' )
	);
} );
