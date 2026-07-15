import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  Filter, 
  IndianRupee, 
  Compass, 
  Maximize2, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Layers, 
  Sliders, 
  BookOpen, 
  Calculator, 
  Info,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Eye,
  X,
  User,
  Check,
  ZoomIn,
  ZoomOut,
  Maximize,
  Map,
  ShieldCheck,
  Building,
  HelpCircle,
  PenTool
} from 'lucide-react';

import phase2Plots from '../phase2_partial.json';

// Realistic layout coordinates matched directly onto "WhatsApp Image 2026-06-30 at 20.11.01.jpeg"
const initialPlotsData = [
  ...phase2Plots,
  {
    "id": "2",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 524,
    "y": 288,
    "r": 14
  },
  {
    "id": "3",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 493,
    "y": 311,
    "r": 14
  },
  {
    "id": "4",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 479,
    "y": 330,
    "r": 14
  },
  {
    "id": "5",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 458,
    "y": 344,
    "r": 14
  },
  {
    "id": "6",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 443,
    "y": 361,
    "r": 14
  },
  {
    "id": "7",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 421,
    "y": 377,
    "r": 14
  },
  {
    "id": "8",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 411,
    "y": 393,
    "r": 14
  },
  {
    "id": "9",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 390,
    "y": 406,
    "r": 14
  },
  {
    "id": "13",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 314,
    "y": 484,
    "r": 14
  },
  {
    "id": "14",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 292,
    "y": 500,
    "r": 14
  },
  {
    "id": "15",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 279,
    "y": 519,
    "r": 14
  },
  {
    "id": "16",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 263,
    "y": 534,
    "r": 14
  },
  {
    "id": "18",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 286,
    "y": 560,
    "r": 14
  },
  {
    "id": "19",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 309,
    "y": 535,
    "r": 14
  },
  {
    "id": "20",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 329,
    "y": 525,
    "r": 14
  },
  {
    "id": "22",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 362,
    "y": 494,
    "r": 14
  },
  {
    "id": "24",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 402,
    "y": 450,
    "r": 14
  },
  {
    "id": "26",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 440,
    "y": 415,
    "r": 14
  },
  {
    "id": "25",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 420,
    "y": 430,
    "r": 14
  },
  {
    "id": "27",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 455,
    "y": 396,
    "r": 14
  },
  {
    "id": "29",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 483,
    "y": 370,
    "r": 14
  },
  {
    "id": "30",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 504,
    "y": 354,
    "r": 14
  },
  {
    "id": "32",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 542,
    "y": 314,
    "r": 14
  },
  {
    "id": "36",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 639,
    "y": 290,
    "r": 14
  },
  {
    "id": "37",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 622,
    "y": 295,
    "r": 14
  },
  {
    "id": "38",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 610,
    "y": 309,
    "r": 14
  },
  {
    "id": "39",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 392,
    "y": 524,
    "r": 14
  },
  {
    "id": "40",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 370,
    "y": 544,
    "r": 14
  },
  {
    "id": "41",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 357,
    "y": 559,
    "r": 14
  },
  {
    "id": "43",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 325,
    "y": 598,
    "r": 14
  },
  {
    "id": "44",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 304,
    "y": 608,
    "r": 14
  },
  {
    "id": "45",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 290,
    "y": 627,
    "r": 14
  },
  {
    "id": "46",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 315,
    "y": 652,
    "r": 14
  },
  {
    "id": "47",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 332,
    "y": 628,
    "r": 14
  },
  {
    "id": "49",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 365,
    "y": 602,
    "r": 14
  },
  {
    "id": "50",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 381,
    "y": 585,
    "r": 14
  },
  {
    "id": "52",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 413,
    "y": 549,
    "r": 14
  },
  {
    "id": "54",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 652,
    "y": 320,
    "r": 14
  },
  {
    "id": "55",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 665,
    "y": 310,
    "r": 14
  },
  {
    "id": "56",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 676,
    "y": 296,
    "r": 14
  },
  {
    "id": "57",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 688,
    "y": 284,
    "r": 14
  },
  {
    "id": "58",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 711,
    "y": 336,
    "r": 14
  },
  {
    "id": "59",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 690,
    "y": 352,
    "r": 14
  },
  {
    "id": "60",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 673,
    "y": 366,
    "r": 14
  },
  {
    "id": "63",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 630,
    "y": 410,
    "r": 14
  },
  {
    "id": "64",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 593,
    "y": 436,
    "r": 14
  },
  {
    "id": "65",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 579,
    "y": 455,
    "r": 14
  },
  {
    "id": "66",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 559,
    "y": 464,
    "r": 14
  },
  {
    "id": "68",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 532,
    "y": 490,
    "r": 14
  },
  {
    "id": "69",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 516,
    "y": 505,
    "r": 14
  },
  {
    "id": "70",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 498,
    "y": 518,
    "r": 14
  },
  {
    "id": "71",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 488,
    "y": 534,
    "r": 14
  },
  {
    "id": "72",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 473,
    "y": 543,
    "r": 14
  },
  {
    "id": "74",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 433,
    "y": 607,
    "r": 14
  },
  {
    "id": "73",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 452,
    "y": 588,
    "r": 14
  },
  {
    "id": "75",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 417,
    "y": 624,
    "r": 14
  },
  {
    "id": "76",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 399,
    "y": 641,
    "r": 14
  },
  {
    "id": "77",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 384,
    "y": 656,
    "r": 14
  },
  {
    "id": "78",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 371,
    "y": 670,
    "r": 14
  },
  {
    "id": "79",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 349,
    "y": 689,
    "r": 14
  },
  {
    "id": "80",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 370,
    "y": 708,
    "r": 14
  },
  {
    "id": "81",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 390,
    "y": 690,
    "r": 14
  },
  {
    "id": "82",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 407,
    "y": 675,
    "r": 14
  },
  {
    "id": "84",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 442,
    "y": 642,
    "r": 14
  },
  {
    "id": "85",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 455,
    "y": 624,
    "r": 14
  },
  {
    "id": "86",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 476,
    "y": 612,
    "r": 14
  },
  {
    "id": "87",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 501,
    "y": 576,
    "r": 14
  },
  {
    "id": "89",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 531,
    "y": 547,
    "r": 14
  },
  {
    "id": "90",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 543,
    "y": 528,
    "r": 14
  },
  {
    "id": "91",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 558,
    "y": 521,
    "r": 14
  },
  {
    "id": "92",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 575,
    "y": 503,
    "r": 14
  },
  {
    "id": "93",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 592,
    "y": 488,
    "r": 14
  },
  {
    "id": "95",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 624,
    "y": 462,
    "r": 14
  },
  {
    "id": "96",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 656,
    "y": 432,
    "r": 14
  },
  {
    "id": "97",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 670,
    "y": 416,
    "r": 14
  },
  {
    "id": "98",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 687,
    "y": 399,
    "r": 14
  },
  {
    "id": "99",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 702,
    "y": 390,
    "r": 14
  },
  {
    "id": "100",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 716,
    "y": 372,
    "r": 14
  },
  {
    "id": "101",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 730,
    "y": 361,
    "r": 14
  },
  {
    "id": "102",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 772,
    "y": 401,
    "r": 14
  },
  {
    "id": "103",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 750,
    "y": 416,
    "r": 14
  },
  {
    "id": "104",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 734,
    "y": 433,
    "r": 14
  },
  {
    "id": "105",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 716,
    "y": 447,
    "r": 14
  },
  {
    "id": "106",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 701,
    "y": 466,
    "r": 14
  },
  {
    "id": "107",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 682,
    "y": 475,
    "r": 14
  },
  {
    "id": "108",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 665,
    "y": 492,
    "r": 14
  },
  {
    "id": "113",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 583,
    "y": 572,
    "r": 14
  },
  {
    "id": "115",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 548,
    "y": 598,
    "r": 14
  },
  {
    "id": "116",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 533,
    "y": 611,
    "r": 14
  },
  {
    "id": "117",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 439,
    "y": 713,
    "r": 14
  },
  {
    "id": "118",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 425,
    "y": 724,
    "r": 14
  },
  {
    "id": "119",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 408,
    "y": 724,
    "r": 14
  },
  {
    "id": "121",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 399,
    "y": 755,
    "r": 14
  },
  {
    "id": "122",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 424,
    "y": 775,
    "r": 14
  },
  {
    "id": "123",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 436,
    "y": 766,
    "r": 14
  },
  {
    "id": "124",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 443,
    "y": 752,
    "r": 14
  },
  {
    "id": "125",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 452,
    "y": 738,
    "r": 14
  },
  {
    "id": "126",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 469,
    "y": 736,
    "r": 14
  },
  {
    "id": "1",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 319,
    "y": 717,
    "r": 14
  },
  {
    "id": "10",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 191,
    "y": 884,
    "r": 14
  },
  {
    "id": "11",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 180,
    "y": 905,
    "r": 14
  },
  {
    "id": "12",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 164,
    "y": 917,
    "r": 14
  },
  {
    "id": "17",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 117,
    "y": 975,
    "r": 14
  },
  {
    "id": "21",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 143,
    "y": 1023,
    "r": 14
  },
  {
    "id": "23",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 163,
    "y": 996,
    "r": 14
  },
  {
    "id": "28",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 209,
    "y": 939,
    "r": 14
  },
  {
    "id": "31",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 248,
    "y": 887,
    "r": 14
  },
  {
    "id": "33",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 273,
    "y": 857,
    "r": 14
  },
  {
    "id": "34",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 284,
    "y": 841,
    "r": 14
  },
  {
    "id": "35",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 297,
    "y": 824,
    "r": 14
  },
  {
    "id": "42",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 349,
    "y": 813,
    "r": 14
  },
  {
    "id": "48",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 280,
    "y": 899,
    "r": 14
  },
  {
    "id": "51",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 234,
    "y": 953,
    "r": 14
  },
  {
    "id": "53",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 214,
    "y": 979,
    "r": 14
  },
  {
    "id": "61",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 210,
    "y": 1061,
    "r": 14
  },
  {
    "id": "62",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 219,
    "y": 1046,
    "r": 14
  },
  {
    "id": "67",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 272,
    "y": 984,
    "r": 14
  },
  {
    "id": "88",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 248,
    "y": 1050,
    "r": 14
  },
  {
    "id": "83",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 299,
    "y": 987,
    "r": 14
  },
  {
    "id": "94",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 281,
    "y": 1073,
    "r": 14
  },
  {
    "id": "109",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 329,
    "y": 1116,
    "r": 14
  },
  {
    "id": "110",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 340,
    "y": 1103,
    "r": 14
  },
  {
    "id": "111",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 351,
    "y": 1089,
    "r": 14
  },
  {
    "id": "112",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 361,
    "y": 1079,
    "r": 14
  },
  {
    "id": "114",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 378,
    "y": 1054,
    "r": 14
  },
  {
    "id": "120",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 351,
    "y": 1127,
    "r": 14
  },
  {
    "id": "127",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 449,
    "y": 1108,
    "r": 14
  },
  {
    "id": "128",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 439,
    "y": 1119,
    "r": 14
  },
  {
    "id": "129",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 431,
    "y": 1129,
    "r": 14
  },
  {
    "id": "130",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 422,
    "y": 1145,
    "r": 14
  },
  {
    "id": "131",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 410,
    "y": 1155,
    "r": 14
  },
  {
    "id": "175",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 366,
    "y": 1001,
    "r": 14
  },
  {
    "id": "154",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 388,
    "y": 1023,
    "r": 14
  },
  {
    "id": "155",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 401,
    "y": 1011,
    "r": 14
  },
  {
    "id": "156",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 409,
    "y": 997,
    "r": 14
  },
  {
    "id": "157",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 419,
    "y": 985,
    "r": 14
  },
  {
    "id": "158",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 428,
    "y": 974,
    "r": 14
  },
  {
    "id": "159",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 437,
    "y": 963,
    "r": 14
  },
  {
    "id": "160",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 444,
    "y": 951,
    "r": 14
  },
  {
    "id": "161",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 455,
    "y": 939,
    "r": 14
  },
  {
    "id": "162",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 467,
    "y": 925,
    "r": 14
  },
  {
    "id": "163",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 475,
    "y": 913,
    "r": 14
  },
  {
    "id": "164",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 485,
    "y": 900,
    "r": 14
  },
  {
    "id": "174",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 375,
    "y": 991,
    "r": 14
  },
  {
    "id": "165",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 463,
    "y": 879,
    "r": 14
  },
  {
    "id": "166",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 453,
    "y": 893,
    "r": 14
  },
  {
    "id": "167",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 443,
    "y": 904,
    "r": 14
  },
  {
    "id": "168",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 435,
    "y": 917,
    "r": 14
  },
  {
    "id": "169",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 423,
    "y": 928,
    "r": 14
  },
  {
    "id": "170",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 415,
    "y": 940,
    "r": 14
  },
  {
    "id": "171",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 405,
    "y": 952,
    "r": 14
  },
  {
    "id": "172",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 399,
    "y": 966,
    "r": 14
  },
  {
    "id": "173",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 387,
    "y": 977,
    "r": 14
  },
  {
    "id": "153",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 427,
    "y": 1051,
    "r": 14
  },
  {
    "id": "152",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 437,
    "y": 1038,
    "r": 14
  },
  {
    "id": "151",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 447,
    "y": 1026,
    "r": 14
  },
  {
    "id": "150",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 455,
    "y": 1015,
    "r": 14
  },
  {
    "id": "149",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 463,
    "y": 1002,
    "r": 14
  },
  {
    "id": "148",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 476,
    "y": 992,
    "r": 14
  },
  {
    "id": "147",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 482,
    "y": 977,
    "r": 14
  },
  {
    "id": "146",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 495,
    "y": 968,
    "r": 14
  },
  {
    "id": "132",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 447,
    "y": 1065,
    "r": 14
  },
  {
    "id": "133",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 458,
    "y": 1051,
    "r": 14
  },
  {
    "id": "134",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 465,
    "y": 1039,
    "r": 14
  },
  {
    "id": "135",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 474,
    "y": 1025,
    "r": 14
  },
  {
    "id": "136",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 485,
    "y": 1015,
    "r": 14
  },
  {
    "id": "137",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 493,
    "y": 1003,
    "r": 14
  },
  {
    "id": "E-1",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 536,
    "y": 903,
    "r": 14
  },
  {
    "id": "E-2",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 540,
    "y": 893,
    "r": 14
  },
  {
    "id": "E-3",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 548,
    "y": 888,
    "r": 14
  },
  {
    "id": "E-4",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 553,
    "y": 879,
    "r": 14
  },
  {
    "id": "E-5",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 556,
    "y": 871,
    "r": 14
  },
  {
    "id": "E-6",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 561,
    "y": 865,
    "r": 14
  },
  {
    "id": "E-7",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 565,
    "y": 854,
    "r": 14
  },
  {
    "id": "E-8",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 571,
    "y": 847,
    "r": 14
  },
  {
    "id": "E-9",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 568,
    "y": 839,
    "r": 14
  },
  {
    "id": "E-10",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 581,
    "y": 836,
    "r": 14
  },
  {
    "id": "E-11",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 553,
    "y": 819,
    "r": 14
  },
  {
    "id": "E-12",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 549,
    "y": 829,
    "r": 14
  },
  {
    "id": "179",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 542,
    "y": 845,
    "r": 14
  },
  {
    "id": "178",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 539,
    "y": 855,
    "r": 14
  },
  {
    "id": "177",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 527,
    "y": 869,
    "r": 14
  },
  {
    "id": "176",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 515,
    "y": 884,
    "r": 14
  },
  {
    "id": "138",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 500,
    "y": 992,
    "r": 14
  },
  {
    "id": "139",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 510,
    "y": 982,
    "r": 14
  },
  {
    "id": "140",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 521,
    "y": 968,
    "r": 14
  },
  {
    "id": "141",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 529,
    "y": 957,
    "r": 14
  },
  {
    "id": "142",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 538,
    "y": 947,
    "r": 14
  },
  {
    "id": "145",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 501,
    "y": 955,
    "r": 14
  },
  {
    "id": "144",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 511,
    "y": 943,
    "r": 14
  },
  {
    "id": "143",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 521,
    "y": 930,
    "r": 14
  },
  {
    "id": "L-1",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 575,
    "y": 930,
    "r": 14
  },
  {
    "id": "L-2",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 583,
    "y": 919,
    "r": 14
  },
  {
    "id": "L-3",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 587,
    "y": 909,
    "r": 14
  },
  {
    "id": "L-4",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 593,
    "y": 903,
    "r": 14
  },
  {
    "id": "L-5",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 591,
    "y": 894,
    "r": 14
  },
  {
    "id": "L-6",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 606,
    "y": 892,
    "r": 14
  },
  {
    "id": "L-7",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 603,
    "y": 881,
    "r": 14
  },
  {
    "id": "L-8",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 614,
    "y": 877,
    "r": 14
  },
  {
    "id": "L-9",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 612,
    "y": 861,
    "r": 14
  },
  {
    "id": "2",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 306,
    "y": 741,
    "r": 14
  },
  {
    "id": "3",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 293,
    "y": 755,
    "r": 14
  },
  {
    "id": "4",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 277,
    "y": 777,
    "r": 14
  },
  {
    "id": "5",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 266,
    "y": 798,
    "r": 14
  },
  {
    "id": "6",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 248,
    "y": 808,
    "r": 14
  },
  { "id": "7", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 237, "y": 827, "r": 14 },
  { "id": "8", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 223, "y": 849, "r": 14 },
  { "id": "9", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 209, "y": 861, "r": 14 },
  { "id": "13", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 150, "y": 933, "r": 14 },
  { "id": "14", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 144, "y": 944, "r": 14 },
  { "id": "15", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 138, "y": 955, "r": 14 },
  { "id": "16", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 129, "y": 965, "r": 14 },
  { "id": "18", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 109, "y": 983, "r": 14 },
  { "id": "19", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 98, "y": 998, "r": 14 },
  { "id": "20", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 131, "y": 1038, "r": 14 },
  { "id": "22", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 151, "y": 1010, "r": 14 },
  { "id": "24", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 174, "y": 986, "r": 14 },
  { "id": "25", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 179, "y": 971, "r": 14 },
  { "id": "26", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 190, "y": 966, "r": 14 },
  { "id": "27", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 200, "y": 951, "r": 14 },
  { "id": "29", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 221, "y": 927, "r": 14 },
  { "id": "30", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 238, "y": 903, "r": 14 },
  { "id": "32", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 264, "y": 870, "r": 14 },
  { "id": "36", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 313, "y": 813, "r": 14 },
  { "id": "37", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 325, "y": 797, "r": 14 },
  { "id": "38", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 336, "y": 781, "r": 14 },
  { "id": "39", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 349, "y": 762, "r": 14 },
  { "id": "40", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 376, "y": 777, "r": 14 },
  { "id": "41", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 358, "y": 801, "r": 14 },
  { "id": "43", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 334, "y": 827, "r": 14 },
  { "id": "44", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 323, "y": 847, "r": 14 },
  { "id": "45", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 315, "y": 862, "r": 14 },
  { "id": "46", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 297, "y": 873, "r": 14 },
  { "id": "47", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 289, "y": 884, "r": 14 },
  { "id": "49", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 267, "y": 922, "r": 14 },
  { "id": "50", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 245, "y": 943, "r": 14 },
  { "id": "52", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 223, "y": 969, "r": 14 },
  { "id": "54", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 206, "y": 995, "r": 14 },
  { "id": "55", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 195, "y": 1006, "r": 14 },
  { "id": "56", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 186, "y": 1019, "r": 14 },
  { "id": "57", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 178, "y": 1029, "r": 14 },
  { "id": "58", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 169, "y": 1042, "r": 14 },
  { "id": "59", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 158, "y": 1057, "r": 14 },
  { "id": "60", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 198, "y": 1073, "r": 14 },
  { "id": "63", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 230, "y": 1033, "r": 14 },
  { "id": "64", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 241, "y": 1023, "r": 14 },
  { "id": "65", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 250, "y": 1011, "r": 14 },
  { "id": "66", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 258, "y": 999, "r": 14 },
  { "id": "68", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 279, "y": 971, "r": 14 },
  { "id": "91", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 222, "y": 1082, "r": 14 },
  { "id": "69", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 354, "y": 891, "r": 14 },
  { "id": "70", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 365, "y": 879, "r": 14 },
  { "id": "71", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 372, "y": 866, "r": 14 },
  { "id": "72", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 381, "y": 853, "r": 14 },
  { "id": "73", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 390, "y": 844, "r": 14 },
  { "id": "74", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 401, "y": 831, "r": 14 },
  { "id": "75", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 410, "y": 817, "r": 14 },
  { "id": "76", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 432, "y": 838, "r": 14 },
  { "id": "77", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 424, "y": 850, "r": 14 },
  { "id": "78", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 414, "y": 863, "r": 14 },
  { "id": "79", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 405, "y": 873, "r": 14 },
  { "id": "80", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 395, "y": 885, "r": 14 },
  { "id": "81", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 386, "y": 899, "r": 14 },
  { "id": "82", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 378, "y": 909, "r": 14 },
  { "id": "84", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 286, "y": 998, "r": 14 },
  { "id": "85", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 281, "y": 1012, "r": 14 },
  { "id": "86", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 267, "y": 1022, "r": 14 },
  { "id": "87", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 259, "y": 1035, "r": 14 },
  { "id": "89", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 238, "y": 1062, "r": 14 },
  { "id": "90", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 229, "y": 1071, "r": 14 },
  { "id": "92", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 261, "y": 1100, "r": 14 },
  { "id": "93", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 271, "y": 1083, "r": 14 },
  { "id": "95", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 293, "y": 1061, "r": 14 },
  { "id": "96", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 302, "y": 1048, "r": 14 },
  { "id": "97", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 309, "y": 1038, "r": 14 },
  { "id": "98", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 318, "y": 1025, "r": 14 },
  { "id": "99", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 330, "y": 1013, "r": 14 },
  { "id": "100", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 347, "y": 1026, "r": 14 },
  { "id": "101", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 338, "y": 1035, "r": 14 },
  { "id": "102", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 330, "y": 1050, "r": 14 },
  { "id": "103", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 322, "y": 1062, "r": 14 },
  { "id": "104", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 313, "y": 1076, "r": 14 },
  { "id": "105", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 302, "y": 1088, "r": 14 },
  { "id": "106", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 292, "y": 1102, "r": 14 },
  { "id": "107", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 280, "y": 1109, "r": 14 },
  { "id": "108", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 322, "y": 1125, "r": 14 },
  { "id": "113", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 368, "y": 1065, "r": 14 }
];

export default function App() {
  const [plots, setPlots] = useState(initialPlotsData);

  const [selectedPlot, setSelectedPlot] = useState(plots[0] || initialPlotsData[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [phaseFilter, setPhaseFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [maxPrice, setMaxPrice] = useState(6000000); // 60 Lakhs
  const [language, setLanguage] = useState("hi"); // Default to Hindi as per request
  const [activeTab, setActiveTab] = useState("map"); 
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeBeacon, setActiveBeacon] = useState(null);
  const [isMapperMode, setIsMapperMode] = useState(false);

  // Booking Form state
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState("");

  // EMI Calculator state
  const [downPayment, setDownPayment] = useState(1000000); 
  const [interestRate, setInterestRate] = useState(8.75); 
  const [loanTenure, setLoanTenure] = useState(15); 

  // Map viewport DOM reference
  const mapContainerRef = useRef(null);

  const dict = {
    en: {
      title: "Royal Meadows Layout Plan",
      subtitle: "Interactive RERA Approved Township Plot Navigator",
      imageRef: "Viewing Image: WhatsApp Image 2026-06-30 at 20.11.01.jpeg",
      searchPlaceholder: "Search plot number (e.g., 33, 114, 17)...",
      filters: "Quick Filters",
      phaseLabel: "Township Phase",
      statusLabel: "Plot Status",
      priceRange: "Max Budget",
      allPhases: "All Phases",
      allStatus: "All Status",
      available: "Available",
      sold: "Sold Out",
      detailsTitle: "Selected Plot Dossier",
      plotNo: "Plot Number",
      phase: "Layout Phase",
      size: "Plot Dimension",
      price: "Premium Price",
      facing: "Vastu Direction",
      vastuScore: "Vastu Compliance",
      emiCalc: "Land Loan Monthly EMI Calculator",
      downPayment: "Down Payment Amount",
      interestRate: "Annual Interest Rate",
      tenure: "Tenure Period",
      monthlyEmi: "Approx. Monthly EMI",
      bookBtn: "Submit Expression of Interest",
      bookTitle: "Instant Registry & Booking Request",
      fullName: "Your Full Name",
      phone: "Mobile (WhatsApp verified)",
      email: "Email Address",
      successMsg: "Your EOI has been submitted successfully! Relationship Manager will call with registry paper checklist within 15 mins.",
      legendPhase1: "Phase-1: Grey (Sold), Red (Available)",
      legendPhase2: "Phase-2: Grey (Sold), White (Available)",
      mapHint: "Double-click to reset view. Drag to pan and hover to inspect properties.",
      alertSelect: "Select an interactive plot to load spatial telemetry details."
    },
    hi: {
      title: "रॉयल मीडोज लेआउट प्लान",
      subtitle: "इंटरएक्टिव रेरा (RERA) स्वीकृत टाउनशिप प्लॉट नेविगेटर",
      imageRef: "लेआउट इमेज: WhatsApp Image 2026-06-30 at 20.11.01.jpeg",
      searchPlaceholder: "प्लॉट नंबर खोजें (जैसे, 33, 114, 17)...",
      filters: "त्वरित फ़िल्टर",
      phaseLabel: "टाउनशिप फेज",
      statusLabel: "प्लॉट की स्थिति",
      priceRange: "अधिकतम बजट",
      allPhases: "सभी फेज",
      allStatus: "सभी स्थिति",
      available: "उपलब्ध",
      sold: "बिक चुका है",
      detailsTitle: "चयनित प्लॉट का पूरा विवरण",
      plotNo: "प्लॉट संख्या",
      phase: "लेआउट फेज",
      size: "प्लॉट का क्षेत्रफल",
      price: "प्रीमियम कीमत",
      facing: "वास्तु दिशा",
      vastuScore: "वास्तु अनुपालन",
      emiCalc: "भूमि ऋण मासिक EMI कैलकुलेटर",
      downPayment: "डाउन पेमेंट राशि",
      interestRate: "वार्षिक ब्याज दर",
      tenure: "ऋण अवधि",
      monthlyEmi: "अनुमानित मासिक EMI",
      bookBtn: "बुकिंग की पुष्टि के लिए सबमिट करें",
      bookTitle: "त्वरित रजिस्ट्री और बुकिंग अनुरोध",
      fullName: "आपका पूरा नाम",
      phone: "मोबाइल नंबर (WhatsApp सत्यापित)",
      email: "ईमेल पता",
      successMsg: "आपका आवेदन सफलतापूर्वक सबमिट हो गया है! हमारे प्रबंधक अगले 15 मिनट में रजिस्ट्री दस्तावेजों की सूची के साथ संपर्क करेंगे।",
      legendPhase1: "फेज-1: ग्रे (बिक चुका), लाल (उपलब्ध)",
      legendPhase2: "फेज-2: ग्रे (बिक चुका), सफेद (उपलब्ध)",
      mapHint: "व्यू को रीसेट करने के लिए डबल-क्लिक करें। पैन करने के लिए ड्रैग करें और प्लॉट पर होवर करें।",
      alertSelect: "प्लॉट के स्थानिक टेलीमेट्री विवरण लोड करने के लिए मैप पर क्लिक करें।"
    }
  };

  const t = dict[language];

  const filteredPlots = useMemo(() => {
    return plots.filter(plot => {
      const matchesSearch = plot.id.toLowerCase().includes(searchQuery.trim().toLowerCase());
      const matchesPhase = phaseFilter === "all" || plot.phase === phaseFilter;
      const matchesStatus = statusFilter === "all" || plot.status === statusFilter;
      const matchesPrice = plot.price <= maxPrice || plot.status === "sold";
      return matchesSearch && matchesPhase && matchesStatus && matchesPrice;
    });
  }, [plots, searchQuery, phaseFilter, statusFilter, maxPrice]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const matched = plots.find(p => p.id === searchQuery.trim());
      if (matched) {
        setSelectedPlot(matched);
        setPanOffset({
          x: 200 - matched.x * zoomLevel,
          y: 300 - matched.y * zoomLevel
        });
        setActiveBeacon(matched.id);
      }
    } else {
      setActiveBeacon(null);
    }
  }, [searchQuery]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (direction) => {
    setZoomLevel(prev => {
      const nextZoom = direction === 'in' ? prev + 0.25 : prev - 0.25;
      return Math.min(Math.max(nextZoom, 0.4), 3.0);
    });
  };

  const handleResetMap = () => {
    // Set zoom to 0.5 to fit the 1200px image inside the 640px container height
    setZoomLevel(0.5);
    setPanOffset({ x: window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 100 : 0, y: 20 });
    setActiveBeacon(null);
  };

  // Run initial zoom adjustment once layout is ready
  useEffect(() => {
    handleResetMap();
  }, []);

  const emiDetails = useMemo(() => {
    if (!selectedPlot) return { principal: 0, monthly: 0 };
    const price = selectedPlot.price;
    const principal = Math.max(0, price - downPayment);
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;
    let monthly = 0;
    if (principal > 0 && r > 0) {
      monthly = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else if (principal > 0) {
      monthly = principal / n;
    }
    return {
      principal: principal,
      monthly: Math.round(monthly)
    };
  }, [selectedPlot, downPayment, interestRate, loanTenure]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingEmail) {
      setBookingError("कृपया सभी फ़ील्ड भरें।");
      return;
    }
    setBookingError("");
    setBookingSuccess(true);
    
    // Instantly simulate booking update
    setPlots(prev => prev.map(p => p.id === selectedPlot.id ? { ...p, status: 'sold' } : p));
    setSelectedPlot(prev => ({ ...prev, status: 'sold' }));

    setTimeout(() => {
      setBookingSuccess(false);
      setBookingName("");
      setBookingPhone("");
      setBookingEmail("");
    }, 6000);
  };

  const getPlotMarkerColors = (plot, isSelected) => {
    if (plot.status === "sold") {
      return {
        fill: "rgba(100, 116, 139, 0.3)",
        stroke: "rgba(148, 163, 184, 0.9)",
        glowingPulse: "rgba(148, 163, 184, 0.3)",
        text: "#94a3b8"
      };
    }
    
    // Match colors exactly to Phase instructions on the WhatsApp layout map
    if (plot.phase === "Phase-1") {
      return {
        fill: isSelected ? "rgba(239, 68, 68, 0.75)" : "rgba(239, 68, 68, 0.45)",
        stroke: "#ef4444",
        glowingPulse: "rgba(239, 68, 68, 0.6)",
        text: "#ffffff"
      };
    } else {
      return {
        fill: isSelected ? "rgba(59, 130, 246, 0.75)" : "rgba(59, 130, 246, 0.45)",
        stroke: "#3b82f6",
        glowingPulse: "rgba(59, 130, 246, 0.6)",
        text: "#ffffff"
      };
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-900 overflow-hidden">
      
      <main className="flex-1 w-full h-full flex flex-col">
        
        {/* VIEWPORT CONTROLS AND SEARCH */}
        <div className="w-full h-full flex flex-col">
          

          {/* INTERACTIVE TOWNSHIP MAP ENGINE */}
          {activeTab === "map" ? (
            <div className="bg-slate-900 overflow-hidden relative flex flex-col flex-1 w-full h-full">
              
              {/* Selected Plot Indicator */}
              {selectedPlot && (
                <div className="absolute top-4 left-4 z-20 bg-slate-900/95 border border-slate-700 rounded-2xl px-5 py-4 shadow-2xl backdrop-blur-md min-w-[200px]">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">Selected Plot</span>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-amber-400 font-mono">#{selectedPlot.id}</span>
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${
                      selectedPlot.status === 'sold' ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    }`}>
                      {selectedPlot.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Map floating controls */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                <button 
                  onClick={() => setIsMapperMode(!isMapperMode)} 
                  className={`p-2.5 rounded-xl shadow-lg transition-all ${isMapperMode ? 'bg-amber-500 text-slate-900 border-amber-400' : 'bg-slate-950/90 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800'}`}
                  title="Toggle Mapper Mode"
                >
                  <PenTool className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => handleZoom('in')} 
                  className="bg-slate-950/90 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 p-2.5 rounded-xl shadow-lg transition-all"
                  title="Zoom In"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => handleZoom('out')} 
                  className="bg-slate-950/90 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 p-2.5 rounded-xl shadow-lg transition-all"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button 
                  onClick={handleResetMap} 
                  className="bg-slate-950/90 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 p-2.5 rounded-xl shadow-lg transition-all"
                  title="Reset View"
                >
                  <Maximize className="h-4 w-4" />
                </button>
              </div>

              {/* Instructions and hints */}
              <div className="absolute bottom-4 left-4 z-20 bg-slate-950/90 border border-slate-800 rounded-lg px-3 py-2 text-[10px] text-slate-400 max-w-xs pointer-events-none backdrop-blur shadow-md">
                <p className="font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Interactive Blueprint Navigation
                </p>
                <p className="mt-1 leading-normal">{t.mapHint}</p>
              </div>

              {/* THE WORKSPACE CANVAS AREA */}
              <div 
                ref={mapContainerRef}
                className="w-full h-full relative overflow-hidden bg-slate-950 cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onDoubleClick={handleResetMap}
              >
                {/* MAPPER MODE OUTPUT */}
                {isMapperMode && (
                  <div className="absolute bottom-4 right-4 z-50 bg-slate-900 border border-amber-500 rounded-xl p-4 shadow-2xl w-96" onMouseDown={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-amber-500 font-bold">Mapper Mode Active</h3>
                      <button 
                        onClick={() => {
                          const phase2Plots = plots.filter(p => p.phase === "Phase-2");
                          navigator.clipboard.writeText(JSON.stringify(phase2Plots, null, 2));
                          alert("Phase 2 array copied to clipboard!");
                        }}
                        className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-1 rounded hover:bg-amber-500/40 transition-colors font-bold"
                      >
                        Copy Phase 2 Array
                      </button>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">Click anywhere to add/move a plot. Right-click an existing plot to delete it.</p>
                    <textarea 
                      readOnly 
                      className="w-full h-40 bg-slate-950 text-emerald-400 font-mono text-[10px] p-2 rounded border border-slate-700 cursor-text"
                      onMouseDown={(e) => e.stopPropagation()}
                      value={JSON.stringify(plots.filter(p => p.phase === "Phase-2"), null, 2)}
                    />
                  </div>
                )}

                {/* TRANSFORM LAYER */}
                <div 
                  className="absolute origin-top-left transition-transform duration-75 ease-out"
                  style={{
                    transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                    width: '900px',
                    height: '1200px'
                  }}
                >
                  {/* Township Map Base Image */}
                  <img 
                    src="map.jpg" 
                    alt="WhatsApp Image 2026-06-30 at 20.11.01.jpeg"
                    className="w-full h-full object-contain pointer-events-none select-none brightness-95"
                  />

                  {/* INTERACTIVE COORDINATE OVERLAYS */}
                  <svg 
                    viewBox="0 0 900 1200" 
                    className={`absolute inset-0 w-full h-full select-none ${isMapperMode ? 'cursor-crosshair' : ''}`}
                    onClick={(e) => {
                      if (!isMapperMode) return;
                      const svg = e.currentTarget;
                      const pt = svg.createSVGPoint();
                      pt.x = e.clientX;
                      pt.y = e.clientY;
                      const cursorPt = pt.matrixTransform(svg.getScreenCTM().inverse());
                      
                      const plotId = window.prompt("Enter Plot Number:");
                      if (!plotId) return;

                      let plotPhase = "Phase-2";
                      const phaseInput = window.prompt("Enter Phase (1 or 2):", "2");
                      if (phaseInput && phaseInput.includes("1")) {
                        plotPhase = "Phase-1";
                      }

                      const existingIndex = plots.findIndex(p => p.id === plotId && p.phase === plotPhase);
                      if (existingIndex !== -1) {
                        if (window.confirm(`Plot ${plotId} in ${plotPhase} already exists! Update its position?`)) {
                          setPlots(prev => {
                            const newPlots = [...prev];
                            newPlots[existingIndex] = { ...newPlots[existingIndex], x: Math.round(cursorPt.x), y: Math.round(cursorPt.y) };
                            return newPlots;
                          });
                        }
                        return;
                      }

                      const newPlot = {
                        id: plotId,
                        phase: plotPhase,
                        status: "available",
                        size: 1000,
                        price: 3000000,
                        facing: "East",
                        vastu: 90,
                        type: "Standard",
                        description: "Auto-mapped plot.",
                        x: Math.round(cursorPt.x),
                        y: Math.round(cursorPt.y),
                        r: 14
                      };
                      setPlots(prev => [...prev, newPlot]);
                    }}
                  >
                    
                    {/* Visual landmarks */}
                    <g opacity="0.3" className="pointer-events-none">
                      <rect x="420" y="210" width="160" height="110" rx="10" fill="#22c55e" />
                      <text x="500" y="265" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">COMMUNITY GREEN</text>
                      
                      <rect x="480" y="470" width="130" height="90" rx="10" fill="#22c55e" />
                      <text x="545" y="520" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">CENTRAL GARDEN</text>
                    </g>

                    {/* DYNAMIC HOTSPOTS */}
                    {filteredPlots.map((plot) => {
                      const isSelected = selectedPlot?.id === plot.id && selectedPlot?.phase === plot.phase;
                      const isBeacon = activeBeacon === plot.id;
                      const colors = getPlotMarkerColors(plot, isSelected);

                      return (
                        <g 
                          key={`${plot.phase}-${plot.id}`} 
                          className="cursor-pointer"
                          style={{ transformOrigin: `${plot.x}px ${plot.y}px`, transform: 'scale(0.5)' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPlot(plot);
                          }}
                          onContextMenu={(e) => {
                            if (isMapperMode) {
                              e.preventDefault();
                              e.stopPropagation();
                              if (window.confirm(`Delete plot ${plot.id} from ${plot.phase}?`)) {
                                setPlots(prev => prev.filter(p => !(p.id === plot.id && p.phase === plot.phase)));
                              }
                            }
                          }}
                        >
                          {/* Gentle glowing aura for available plots */}
                          {plot.status === "available" && (
                            <circle 
                              cx={plot.x} 
                              cy={plot.y} 
                              r={isSelected ? plot.r + 12 : plot.r + 6}
                              fill="none"
                              stroke={colors.stroke}
                              strokeWidth="2"
                              className="transition-all duration-500 ease-in-out opacity-40 animate-pulse"
                            />
                          )}

                          {/* Outer highlight for selection */}
                          <circle 
                            cx={plot.x} 
                            cy={plot.y} 
                            r={isSelected ? plot.r + 8 : plot.r}
                            fill="none"
                            stroke="#fbbf24"
                            strokeWidth="3"
                            className={`transition-all duration-300 ease-out ${isSelected ? 'opacity-100' : 'opacity-0'}`}
                          />

                          {/* Base Plot Circle */}
                          <circle 
                            cx={plot.x} 
                            cy={plot.y} 
                            r={plot.r} 
                            fill={colors.fill}
                            stroke={isSelected ? "#fbbf24" : colors.stroke}
                            strokeWidth={isSelected ? 3 : 2}
                            className="transition-all duration-200 hover:scale-125"
                          />

                          {/* Text background badge */}
                          <rect 
                            x={plot.x - 14} 
                            y={plot.y - 8} 
                            width="28" 
                            height="16" 
                            rx="4" 
                            fill={isSelected ? "#fbbf24" : "rgba(15, 23, 42, 0.9)"} 
                            stroke={colors.stroke}
                            strokeWidth="1"
                          />

                          {/* Plot Label */}
                          <text 
                            x={plot.x} 
                            y={plot.y + 4} 
                            textAnchor="middle" 
                            fill={isSelected ? "#0f172a" : colors.text} 
                            fontSize="9" 
                            fontWeight="black"
                            className="font-mono"
                          >
                            {plot.id}
                          </text>

                          {/* Pulsing Beacon locator for search action */}
                          {isBeacon && (
                            <g>
                              <circle 
                                cx={plot.x} 
                                cy={plot.y} 
                                r="45" 
                                fill="none" 
                                stroke="#f59e0b" 
                                strokeWidth="2.5" 
                                strokeDasharray="5,5" 
                                className="animate-spin"
                              />
                            </g>
                          )}
                        </g>
                      );
                    })}

                  </svg>
                </div>

              </div>

              {/* MAP VISUAL LEGENDS BAR */}
              <div className="bg-slate-950 border-t border-slate-800 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span> Phase-1 Sector Rules:
                  </p>
                  <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="h-3 w-5 rounded bg-red-500/45 border border-red-500"></span>
                      <span>Red = Available ({t.available})</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-3 w-5 rounded bg-slate-500/20 border border-slate-500"></span>
                      <span>Grey = Sold Out ({t.sold})</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-l border-slate-800 pl-0 md:pl-4">
                  <p className="font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white"></span> Phase-2 Sector Rules:
                  </p>
                  <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="h-3 w-5 rounded bg-white/45 border border-white"></span>
                      <span>White = Available ({t.available})</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-3 w-5 rounded bg-slate-500/20 border border-slate-500"></span>
                      <span>Grey = Sold Out ({t.sold})</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            
            /* SPREADSHEET-STYLE PLOT INDEX LIST */
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                      <th className="p-4">{t.plotNo}</th>
                      <th className="p-4">{t.phase}</th>
                      <th className="p-4">{t.size}</th>
                      <th className="p-4">{t.facing}</th>
                      <th className="p-4">{t.vastuScore}</th>
                      <th className="p-4">{t.price}</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850 text-xs">
                    {filteredPlots.map((plot) => {
                      const isSelected = selectedPlot?.id === plot.id;
                      return (
                        <tr 
                          key={plot.id} 
                          onClick={() => {
                            setSelectedPlot(plot);
                            setActiveTab("map");
                            setPanOffset({ x: 200 - plot.x, y: 150 - plot.y });
                          }}
                          className={`hover:bg-slate-850/60 cursor-pointer transition-colors ${isSelected ? 'bg-slate-800/80 font-semibold text-emerald-400' : 'text-slate-300'}`}
                        >
                          <td className="p-4 font-mono font-bold text-sm text-amber-400">Plot #{plot.id}</td>
                          <td className="p-4 font-medium">{plot.phase}</td>
                          <td className="p-4 font-mono">{plot.size} Sq.Ft. <span className="text-[10px] text-slate-500">({Math.round(plot.size/9)} Gaj)</span></td>
                          <td className="p-4">
                            <span className="flex items-center gap-1">
                              <Compass className="h-3.5 w-3.5 text-slate-500" />
                              {plot.facing}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[11px] font-bold font-mono">
                              {plot.vastu}% Vastu
                            </span>
                          </td>
                          <td className="p-4 font-mono font-bold text-amber-500">
                            {plot.status === "sold" ? "—" : `₹${(plot.price/100000).toFixed(1)} Lakhs`}
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase border ${
                              plot.status === 'sold' ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            }`}>
                              {plot.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <button className="text-emerald-500 hover:text-emerald-400 font-bold flex items-center justify-end gap-1 ml-auto">
                              Locate Map <ChevronRight className="h-3 w-3" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredPlots.length === 0 && (
                      <tr>
                        <td colSpan="8" className="p-8 text-center text-slate-500 italic">
                          No matching plots found in this phase.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>



      </main>



    </div>
  );
}