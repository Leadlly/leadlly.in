import { cn } from '@/utils/cn';
    import React from 'react';

    const LinkdenIcon = ({ className }: { className?: string }) => {
      return (
        <svg className={cn("size-7", className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="Linkdin"><path fill="#57525f" fill-rule="evenodd" d="M434.478 16H77.522C43.718 16 16 43.721 16 77.521v356.957C16 468.278 43.718 496 77.522 496h356.955C468.285 496 496 468.278 496 434.479V77.521C496 43.721 468.285 16 434.478 16zM181 247.812V396h-65V209h65v38.812zm-32.63-66.684c-18.083 0-32.756-14.662-32.756-32.756 0-18.097 14.673-32.741 32.756-32.741 18.108 0 32.767 14.645 32.767 32.741 0 18.094-14.658 32.756-32.767 32.756zM396 294v102h-56v-90.833c0-21.75-2.355-49.724-32.164-49.724-30.262 0-34.836 23.679-34.836 48.156V396h-54V209h52v25h.554c7.756-14 26.757-25.02 55.051-25.02 47.672 0 63.872 22.543 68.305 57.812 1.052 8.277 1.458 17.208 1.458 27.208H396z" clip-rule="evenodd" class="color1a1a1a svgShape"></path></svg>
      );
    };

    export default LinkdenIcon;