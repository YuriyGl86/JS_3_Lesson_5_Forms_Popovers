import Popover from './Popover';

const button = document.querySelector('button');

const popover = new Popover();
popover.setPopover({
  title: 'popover title',
  content: 'content',
}, button);
