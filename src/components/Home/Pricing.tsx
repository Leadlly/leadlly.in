import PricingCard from '../shared/PricingCard';

const plans = [
	{
		title: 'Personal',
		price: 5,
		features: ['1 project', 'Analytics', 'Insights Panel', 'Share Features'],
		isHighlighted: false,
	},
	{
		title: 'Professional',
		price: 10,
		features: ['2 projects', 'Analytics', 'Insights Panel', 'Share Features'],
		isHighlighted: true,
	},
	{
		title: 'Business',
		price: 50,
		features: ['Unlimited Projects', 'Analytics', 'Insights Panel', 'Share Features'],
		isHighlighted: false,
	},
];

const PricingSection: React.FC = () => {
	return (
		<div className='flex flex-col sm:flex-row justify-center items-center	 space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0'>
			{plans.map((plan, index) => (
				<PricingCard
					key={index}
					title={plan.title}
					price={plan.price}
					features={plan.features}
					isHighlighted={plan.isHighlighted}
				/>
			))}
		</div>
	);
};

export default PricingSection;
