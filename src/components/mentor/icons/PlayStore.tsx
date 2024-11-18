import * as React from 'react';
import { SVGProps } from 'react';
const PlayStore = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 28 30'
		fill='none'
		{...props}
	>
		<path
			fill='#FFE300'
			d='m20.646 19.846 6.3-3.493c.711-.395 1.457-1.403 0-2.208l-6.304-3.483-4.513 4.606 4.517 4.578Z'
		/>
		<path
			fill='#FF4E54'
			d='M16.129 15.268 1.695 29.998c.326.043.718-.045 1.17-.295l17.78-9.858-4.516-4.577Z'
		/>
		<path
			fill='#00F085'
			d='m16.13 15.267 4.512-4.606L2.865.837C2.479.624 2.058.55 1.685.633L16.13 15.267Z'
		/>
		<path
			fill='#00E0FF'
			d='M16.13 15.266 1.684.633C1.09.768.6 1.29.6 2.342v25.9c0 .99.384 1.686 1.095 1.756L16.13 15.266Z'
		/>
	</svg>
);
export default PlayStore;
