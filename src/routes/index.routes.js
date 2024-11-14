import { Router } from "express";

import {ping} from '../Controllers/index.controllers.js';

const router = Router();

router.get('/ping', ping);

export default router;
