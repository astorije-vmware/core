/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.47,28a1,1,0,0,0-1.39,1.43l4.41,4.3a1,1,0,0,0,1.4-1.46Z"/><path d="M17.29,3.32a1,1,0,0,0-1.41,0,.92.92,0,0,0-.19.25L4.19,25.91l1.5,1.47L16.85,5.7,30.18,18.93,8.46,30.11,10,31.59l3.62-1.86a5.48,5.48,0,0,0,4.54,2.42,5.43,5.43,0,0,0,5.08-7.37l9.11-4.7a1,1,0,0,0,.53-.73,1,1,0,0,0-.28-.87Zm4.06,24.6a3.45,3.45,0,0,1-4.43,2,3.5,3.5,0,0,1-1.57-1.17l6-3.1A3.53,3.53,0,0,1,21.35,27.92Z"/><path d="M27.54,9.39a1,1,0,0,0,.71-.29l4.17-4.17A1,1,0,0,0,31,3.51h0L26.83,7.69a1,1,0,0,0,0,1.41A1,1,0,0,0,27.54,9.39Z"/><path d="M33.86,12.52h0a1,1,0,0,0-1.18-.77l-1.8.36a1,1,0,0,0-.77,1.19h0a1,1,0,0,0,1,.79h.21l1.79-.37A1,1,0,0,0,33.86,12.52Z"/><path d="M22.42,5.64h.24a1,1,0,0,0,1-.8L24,3.08a1,1,0,0,0-2-.4l-.37,1.79A1,1,0,0,0,22.42,5.64Z"/>',
  solid:
    '<path d="M3.47,28a1,1,0,0,0-1.39,1.43l4.41,4.3a1,1,0,0,0,1.4-1.46Z"/><path d="M27.54,9.39a1,1,0,0,0,.71-.29l4.17-4.17A1,1,0,0,0,31,3.51h0L26.83,7.69a1,1,0,0,0,0,1.41A1,1,0,0,0,27.54,9.39Z"/><path d="M33.86,12.52h0a1,1,0,0,0-1.18-.77l-1.8.36a1,1,0,0,0-.77,1.19h0a1,1,0,0,0,1,.79h.21l1.79-.37A1,1,0,0,0,33.86,12.52Z"/><path d="M22.42,5.64h.24a1,1,0,0,0,1-.8L24,3.08a1,1,0,0,0-2-.4l-.37,1.79A1,1,0,0,0,22.42,5.64Z"/><path d="M17.29,3.32a1,1,0,0,0-1.41,0,.92.92,0,0,0-.19.25L4.19,25.91l1.5,1.47h0L8.48,30.1h0L10,31.59l3.62-1.86a5.48,5.48,0,0,0,4.54,2.42,5.43,5.43,0,0,0,5.08-7.37l9.11-4.7a1,1,0,0,0,.53-.73,1,1,0,0,0-.28-.87Zm4.06,24.6a3.45,3.45,0,0,1-4.43,2,3.5,3.5,0,0,1-1.57-1.17l6-3.1A3.53,3.53,0,0,1,21.35,27.92Z"/>',
};

export const announcementIconName = 'announcement';
export const announcementIcon: IconShapeTuple = [announcementIconName, renderIcon(icon)];
