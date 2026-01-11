/**
 * Ship It - Idle Logistics Empire
 * A mobile-first incremental game
 */

// ============================================================================
// GAME DATA - All 10 Logistics Domains with 10 Tiers Each
// ============================================================================

const DOMAINS = [
    {
        id: 'manual',
        name: 'Manual Labor',
        icon: '🏃',
        description: "It's just you.",
        unlockCost: 0,
        units: [
            { name: 'Bare Hands', icon: '✋', baseSPS: 0.1, baseCost: 10 },
            { name: 'Woven Grass Sack', icon: '🧺', baseSPS: 0.5, baseCost: 100 },
            { name: 'Shoulder Pole', icon: '🪵', baseSPS: 2, baseCost: 500 },
            { name: 'Leather Backpack', icon: '🎒', baseSPS: 8, baseCost: 2000 },
            { name: 'Wheelbarrow', icon: '🛒', baseSPS: 30, baseCost: 8000 },
            { name: 'Hiking Gear', icon: '🥾', baseSPS: 100, baseCost: 30000 },
            { name: 'Hand Truck', icon: '📦', baseSPS: 350, baseCost: 100000 },
            { name: 'Hydraulic Pallet Jack', icon: '🔧', baseSPS: 1200, baseCost: 400000 },
            { name: 'Powered Exoskeleton', icon: '🦾', baseSPS: 4000, baseCost: 1500000 },
            { name: 'Grav-Assist Combat Suit', icon: '🦸', baseSPS: 15000, baseCost: 6000000 }
        ]
    },
    {
        id: 'biological',
        name: 'Biological Logistics',
        icon: '🐴',
        description: 'Let nature do the work.',
        unlockCost: 1000,
        units: [
            { name: 'Domesticated Dog', icon: '🐕', baseSPS: 0.8, baseCost: 150 },
            { name: 'Pack Mule', icon: '🫏', baseSPS: 4, baseCost: 800 },
            { name: 'Camel Caravan', icon: '🐪', baseSPS: 15, baseCost: 3000 },
            { name: 'Horse & Carriage', icon: '🐎', baseSPS: 50, baseCost: 12000 },
            { name: 'War Elephant', icon: '🐘', baseSPS: 180, baseCost: 50000 },
            { name: 'Carrier Pigeons', icon: '🐦', baseSPS: 600, baseCost: 180000 },
            { name: 'Engineered Beast', icon: '🦎', baseSPS: 2000, baseCost: 700000 },
            { name: 'Cyber-Steed', icon: '🦿', baseSPS: 7000, baseCost: 2500000 },
            { name: 'Bio-Leviathan', icon: '🐋', baseSPS: 25000, baseCost: 10000000 },
            { name: 'Hive-Mind Swarm', icon: '🐝', baseSPS: 90000, baseCost: 40000000 }
        ]
    },
    {
        id: 'wheeled',
        name: 'Wheeled Logistics',
        icon: '🚛',
        description: 'Infrastructure matters.',
        unlockCost: 50000,
        units: [
            { name: 'Wooden Cart', icon: '🛞', baseSPS: 5, baseCost: 1000 },
            { name: 'Pedal Rickshaw', icon: '🚲', baseSPS: 20, baseCost: 5000 },
            { name: 'Steam Wagon', icon: '🚂', baseSPS: 80, baseCost: 20000 },
            { name: 'Combustion Pickup', icon: '🛻', baseSPS: 300, baseCost: 80000 },
            { name: 'Box Truck', icon: '🚚', baseSPS: 1000, baseCost: 300000 },
            { name: 'Semi-Truck', icon: '🚛', baseSPS: 3500, baseCost: 1200000 },
            { name: 'Electric Convoy', icon: '⚡', baseSPS: 12000, baseCost: 5000000 },
            { name: 'All-Terrain Rover', icon: '🚙', baseSPS: 40000, baseCost: 20000000 },
            { name: 'Nuclear Hauler', icon: '☢️', baseSPS: 150000, baseCost: 80000000 },
            { name: 'Nanotech Smart-Roads', icon: '🛤️', baseSPS: 500000, baseCost: 300000000 }
        ]
    },
    {
        id: 'maritime',
        name: 'Maritime Logistics',
        icon: '🚢',
        description: 'Bulk beats speed.',
        unlockCost: 500000,
        units: [
            { name: 'Log Raft', icon: '🪵', baseSPS: 25, baseCost: 8000 },
            { name: 'Dugout Canoe', icon: '🛶', baseSPS: 100, baseCost: 35000 },
            { name: 'Sail Barge', icon: '⛵', baseSPS: 400, baseCost: 150000 },
            { name: 'Paddle Steamer', icon: '🚤', baseSPS: 1500, baseCost: 600000 },
            { name: 'Diesel Trawler', icon: '🛥️', baseSPS: 5000, baseCost: 2500000 },
            { name: 'Container Ship', icon: '🚢', baseSPS: 18000, baseCost: 10000000 },
            { name: 'Hydrofoil Express', icon: '🏎️', baseSPS: 60000, baseCost: 40000000 },
            { name: 'Nuclear Icebreaker', icon: '🧊', baseSPS: 200000, baseCost: 150000000 },
            { name: 'Ekranoplan', icon: '🛩️', baseSPS: 700000, baseCost: 600000000 },
            { name: 'Submersible Super-Tanker', icon: '🐙', baseSPS: 2500000, baseCost: 2500000000 }
        ]
    },
    {
        id: 'rail',
        name: 'Rail Logistics',
        icon: '🚆',
        description: 'Rigid but unstoppable.',
        unlockCost: 5000000,
        units: [
            { name: 'Minecart', icon: '🛒', baseSPS: 150, baseCost: 50000 },
            { name: 'Horse Tram', icon: '🐴', baseSPS: 600, baseCost: 200000 },
            { name: 'Steam Locomotive', icon: '🚂', baseSPS: 2500, baseCost: 900000 },
            { name: 'Diesel-Electric', icon: '🚃', baseSPS: 9000, baseCost: 3500000 },
            { name: 'Overhead Electric', icon: '🚋', baseSPS: 30000, baseCost: 15000000 },
            { name: 'Bullet Train', icon: '🚅', baseSPS: 100000, baseCost: 60000000 },
            { name: 'Maglev', icon: '🚄', baseSPS: 350000, baseCost: 250000000 },
            { name: 'Monorail', icon: '🚝', baseSPS: 1200000, baseCost: 1000000000 },
            { name: 'Vacuum Tube Train', icon: '💨', baseSPS: 4000000, baseCost: 4000000000 },
            { name: 'Global Metro', icon: '🌐', baseSPS: 15000000, baseCost: 15000000000 }
        ]
    },
    {
        id: 'aviation',
        name: 'Fixed-Wing Aviation',
        icon: '✈️',
        description: 'Distance collapses.',
        unlockCost: 50000000,
        units: [
            { name: 'Canvas Glider', icon: '🪁', baseSPS: 800, baseCost: 300000 },
            { name: 'Biplane', icon: '🛩️', baseSPS: 3000, baseCost: 1200000 },
            { name: 'Prop Cargo', icon: '🛫', baseSPS: 12000, baseCost: 5000000 },
            { name: 'Jet Transport', icon: '✈️', baseSPS: 45000, baseCost: 20000000 },
            { name: 'VTOL Tilt-Wing', icon: '🚁', baseSPS: 160000, baseCost: 80000000 },
            { name: 'Super-Heavy Lifter', icon: '🏋️', baseSPS: 550000, baseCost: 300000000 },
            { name: 'Supersonic Cargo', icon: '💥', baseSPS: 2000000, baseCost: 1200000000 },
            { name: 'Stealth Smuggler', icon: '🥷', baseSPS: 7000000, baseCost: 5000000000 },
            { name: 'Sub-Orbital Glider', icon: '🛸', baseSPS: 25000000, baseCost: 20000000000 },
            { name: 'Sky-Fortress Carrier', icon: '🏰', baseSPS: 90000000, baseCost: 80000000000 }
        ]
    },
    {
        id: 'rotorcraft',
        name: 'Rotorcraft & Drones',
        icon: '🚁',
        description: 'Precision and autonomy.',
        unlockCost: 500000000,
        units: [
            { name: 'Autogyro', icon: '🪭', baseSPS: 5000, baseCost: 2000000 },
            { name: 'Light Helicopter', icon: '🚁', baseSPS: 20000, baseCost: 8000000 },
            { name: 'Heavy Lift Helicopter', icon: '🪂', baseSPS: 75000, baseCost: 35000000 },
            { name: 'Sky-Crane', icon: '🏗️', baseSPS: 280000, baseCost: 140000000 },
            { name: 'RC Chopper', icon: '🎮', baseSPS: 1000000, baseCost: 550000000 },
            { name: 'Quad Drone', icon: '📸', baseSPS: 3500000, baseCost: 2200000000 },
            { name: 'Octocopter', icon: '🕷️', baseSPS: 12000000, baseCost: 9000000000 },
            { name: 'Swarm AI', icon: '🤖', baseSPS: 45000000, baseCost: 35000000000 },
            { name: 'Solar HAPS Drone', icon: '☀️', baseSPS: 160000000, baseCost: 140000000000 },
            { name: 'Ion-Drive Lifter', icon: '⚛️', baseSPS: 600000000, baseCost: 550000000000 }
        ]
    },
    {
        id: 'ballistics',
        name: 'Ballistic Delivery',
        icon: '🚀',
        description: 'One-way is fine.',
        unlockCost: 5000000000,
        units: [
            { name: 'Black Powder Rocket', icon: '🎆', baseSPS: 30000, baseCost: 15000000 },
            { name: 'Parachute Canister', icon: '🪂', baseSPS: 120000, baseCost: 60000000 },
            { name: 'Cruise Missile', icon: '🎯', baseSPS: 450000, baseCost: 250000000 },
            { name: 'Sounding Rocket', icon: '📡', baseSPS: 1700000, baseCost: 1000000000 },
            { name: 'ICBM Mail', icon: '📬', baseSPS: 6000000, baseCost: 4000000000 },
            { name: 'Propulsive Booster', icon: '🔥', baseSPS: 22000000, baseCost: 16000000000 },
            { name: 'Scramjet', icon: '💫', baseSPS: 80000000, baseCost: 65000000000 },
            { name: 'Heavy Starship', icon: '🚀', baseSPS: 300000000, baseCost: 260000000000 },
            { name: 'Gravity Slingshot', icon: '🌍', baseSPS: 1100000000, baseCost: 1000000000000 },
            { name: 'Kinetic Logistics', icon: '💎', baseSPS: 4000000000, baseCost: 4000000000000 }
        ]
    },
    {
        id: 'void',
        name: 'Void Logistics',
        icon: '🛰️',
        description: 'Shipping without friction.',
        unlockCost: 50000000000,
        units: [
            { name: 'Pressurized Capsule', icon: '💊', baseSPS: 200000, baseCost: 100000000 },
            { name: 'Space Shuttle', icon: '🛸', baseSPS: 800000, baseCost: 400000000 },
            { name: 'Modular Tug', icon: '🔗', baseSPS: 3000000, baseCost: 1600000000 },
            { name: 'Solar Sail', icon: '🌞', baseSPS: 12000000, baseCost: 6500000000 },
            { name: 'Ion Hauler', icon: '⚡', baseSPS: 45000000, baseCost: 26000000000 },
            { name: 'Orbital Elevator', icon: '🗼', baseSPS: 170000000, baseCost: 100000000000 },
            { name: 'Fusion Freighter', icon: '☀️', baseSPS: 650000000, baseCost: 400000000000 },
            { name: 'Asteroid Miner', icon: '🪨', baseSPS: 2500000000, baseCost: 1600000000000 },
            { name: 'Antimatter Engine', icon: '✨', baseSPS: 9500000000, baseCost: 6500000000000 },
            { name: 'Warp Super-Hauler', icon: '🌌', baseSPS: 35000000000, baseCost: 26000000000000 }
        ]
    },
    {
        id: 'quantum',
        name: 'Quantum Logistics',
        icon: '🔮',
        description: 'Movement is optional.',
        unlockCost: 500000000000,
        units: [
            { name: 'Pneumatic Tubes', icon: '🧪', baseSPS: 1500000, baseCost: 800000000 },
            { name: 'Digital Faxing', icon: '📠', baseSPS: 6000000, baseCost: 3200000000 },
            { name: 'Quantum Comms', icon: '📡', baseSPS: 24000000, baseCost: 13000000000 },
            { name: 'Inanimate Transporter', icon: '🎁', baseSPS: 95000000, baseCost: 52000000000 },
            { name: 'Blink Pad', icon: '⚡', baseSPS: 380000000, baseCost: 210000000000 },
            { name: 'Molecular Reassembler', icon: '🧬', baseSPS: 1500000000, baseCost: 840000000000 },
            { name: 'Bio-Safe Portal', icon: '🚪', baseSPS: 6000000000, baseCost: 3400000000000 },
            { name: 'Stable Wormhole', icon: '🕳️', baseSPS: 24000000000, baseCost: 13500000000000 },
            { name: 'Mass-Teleport Array', icon: '🌐', baseSPS: 95000000000, baseCost: 54000000000000 },
            { name: 'Ubiquitous Reality Shift', icon: '♾️', baseSPS: 400000000000, baseCost: 220000000000000 }
        ]
    }
];

// Global Upgrades
const GLOBAL_UPGRADES = [
    { id: 'click1', name: 'Better Packaging', icon: '📦', desc: 'Double manual shipping power', cost: 1000, effect: { type: 'clickMultiplier', value: 2 } },
    { id: 'click2', name: 'Express Labels', icon: '🏷️', desc: 'Triple manual shipping power', cost: 50000, effect: { type: 'clickMultiplier', value: 3 } },
    { id: 'speed1', name: 'Faster Routes', icon: '🗺️', desc: '+10% global SPS', cost: 10000, effect: { type: 'globalSPS', value: 0.1 } },
    { id: 'speed2', name: 'GPS Optimization', icon: '📍', desc: '+25% global SPS', cost: 250000, effect: { type: 'globalSPS', value: 0.25 } },
    { id: 'speed3', name: 'AI Logistics', icon: '🤖', desc: '+50% global SPS', cost: 5000000, effect: { type: 'globalSPS', value: 0.5 } },
    { id: 'speed4', name: 'Quantum Routing', icon: '⚛️', desc: '+100% global SPS', cost: 100000000, effect: { type: 'globalSPS', value: 1.0 } },
    { id: 'click3', name: 'Prime Delivery', icon: '⭐', desc: '5x manual shipping power', cost: 1000000, effect: { type: 'clickMultiplier', value: 5 } },
    { id: 'click4', name: 'Instant Gratification', icon: '💫', desc: '10x manual shipping power', cost: 50000000, effect: { type: 'clickMultiplier', value: 10 } },
    { id: 'speed5', name: 'Time Dilation', icon: '⏰', desc: '+200% global SPS', cost: 2000000000, effect: { type: 'globalSPS', value: 2.0 } },
    { id: 'speed6', name: 'Parallel Universes', icon: '🌀', desc: '+500% global SPS', cost: 50000000000, effect: { type: 'globalSPS', value: 5.0 } }
];

// ============================================================================
// GAME STATE
// ============================================================================

const DEFAULT_STATE = {
    revenue: 0,
    lifetimeRevenue: 0,
    totalShipments: 0,
    manualShips: 0,
    playTime: 0,
    prestigeCount: 0,
    logisticsInsight: 0,
    lastSaveTime: Date.now(),
    lastTickTime: Date.now(),

    // Domain states: { domainId: { unlocked: bool, units: [count, count, ...] } }
    domains: {},

    // Purchased upgrades
    upgrades: [],

    // Expanded domains in UI
    expandedDomains: ['manual']
};

let gameState = JSON.parse(JSON.stringify(DEFAULT_STATE));

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function formatNumber(num) {
    if (num < 0) return '-' + formatNumber(-num);
    if (num < 1000) return num.toFixed(num < 10 ? 1 : 0);

    const suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
    const tier = Math.floor(Math.log10(num) / 3);

    if (tier >= suffixes.length) {
        const exp = Math.floor(Math.log10(num));
        return (num / Math.pow(10, exp)).toFixed(2) + 'e' + exp;
    }

    const scaled = num / Math.pow(1000, tier);
    return scaled.toFixed(scaled < 10 ? 2 : 1) + suffixes[tier];
}

function formatCurrency(num) {
    return '$' + formatNumber(num);
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// ============================================================================
// ECONOMY CALCULATIONS
// ============================================================================

function getInsightMultiplier() {
    // Each insight gives 5% bonus, with diminishing returns
    return 1 + (gameState.logisticsInsight * 0.05);
}

function getUpgradeMultipliers() {
    let globalSPS = 1;
    let clickMultiplier = 1;

    for (const upgradeId of gameState.upgrades) {
        const upgrade = GLOBAL_UPGRADES.find(u => u.id === upgradeId);
        if (upgrade) {
            if (upgrade.effect.type === 'globalSPS') {
                globalSPS += upgrade.effect.value;
            } else if (upgrade.effect.type === 'clickMultiplier') {
                clickMultiplier *= upgrade.effect.value;
            }
        }
    }

    return { globalSPS, clickMultiplier };
}

function getGlobalMultiplier() {
    const insight = getInsightMultiplier();
    const { globalSPS } = getUpgradeMultipliers();
    return insight * globalSPS;
}

function getUnitTier(count) {
    // Every 50 units = +1 tier
    return Math.floor(count / 50);
}

function getTierMultiplier(tier) {
    // Each tier doubles output
    return Math.pow(2, tier);
}

function getUnitCost(domainIndex, unitIndex, currentCount) {
    const unit = DOMAINS[domainIndex].units[unitIndex];
    // Cost grows by 15% per unit owned
    return Math.floor(unit.baseCost * Math.pow(1.15, currentCount));
}

function getUnitSPS(domainIndex, unitIndex, count) {
    if (count <= 0) return 0;

    const unit = DOMAINS[domainIndex].units[unitIndex];
    const tier = getUnitTier(count);
    const tierMult = getTierMultiplier(tier);
    const globalMult = getGlobalMultiplier();

    return unit.baseSPS * count * tierMult * globalMult;
}

function getDomainSPS(domainId) {
    const domainIndex = DOMAINS.findIndex(d => d.id === domainId);
    if (domainIndex === -1) return 0;

    const domainState = gameState.domains[domainId];
    if (!domainState || !domainState.unlocked) return 0;

    let total = 0;
    for (let i = 0; i < domainState.units.length; i++) {
        total += getUnitSPS(domainIndex, i, domainState.units[i]);
    }
    return total;
}

function getTotalSPS() {
    let total = 0;
    for (const domain of DOMAINS) {
        total += getDomainSPS(domain.id);
    }
    return total;
}

function getClickValue() {
    // Base click value = 1% of SPS, minimum 1
    const baseSPS = getTotalSPS();
    const { clickMultiplier } = getUpgradeMultipliers();
    const insight = getInsightMultiplier();

    return Math.max(1, baseSPS * 0.01) * clickMultiplier * insight;
}

function getPrestigeInsight() {
    // Insight based on lifetime revenue
    // Need at least 1 trillion to prestige
    if (gameState.lifetimeRevenue < 1e12) return 0;

    // logarithmic scaling
    return Math.floor(Math.log10(gameState.lifetimeRevenue / 1e12) * 10 + 1);
}

// ============================================================================
// GAME ACTIONS
// ============================================================================

function initializeDomainState(domainId) {
    if (!gameState.domains[domainId]) {
        gameState.domains[domainId] = {
            unlocked: false,
            units: new Array(10).fill(0)
        };
    }
}

function unlockDomain(domainId) {
    const domain = DOMAINS.find(d => d.id === domainId);
    if (!domain) return false;

    initializeDomainState(domainId);

    if (gameState.domains[domainId].unlocked) return false;
    if (gameState.revenue < domain.unlockCost) return false;

    gameState.revenue -= domain.unlockCost;
    gameState.domains[domainId].unlocked = true;

    showToast(`Unlocked ${domain.name}!`, 'success');
    saveGame();
    renderUI();
    return true;
}

function buyUnit(domainId, unitIndex, amount = 1) {
    const domainIndex = DOMAINS.findIndex(d => d.id === domainId);
    if (domainIndex === -1) return false;

    initializeDomainState(domainId);

    const domainState = gameState.domains[domainId];
    if (!domainState.unlocked) return false;

    const currentCount = domainState.units[unitIndex] || 0;
    const cost = getUnitCost(domainIndex, unitIndex, currentCount);

    if (gameState.revenue < cost) return false;

    // Check for tier up before purchase
    const oldTier = getUnitTier(currentCount);

    gameState.revenue -= cost;
    domainState.units[unitIndex] = currentCount + 1;

    const newTier = getUnitTier(domainState.units[unitIndex]);
    if (newTier > oldTier) {
        const unit = DOMAINS[domainIndex].units[unitIndex];
        showToast(`${unit.name} reached Tier ${newTier + 1}!`, 'success');

        // Trigger tier up animation
        const unitCard = document.querySelector(`[data-domain="${domainId}"][data-unit="${unitIndex}"]`);
        if (unitCard) {
            unitCard.classList.add('tier-up');
            setTimeout(() => unitCard.classList.remove('tier-up'), 400);
        }
    }

    saveGame();
    renderUI();
    return true;
}

function purchaseUpgrade(upgradeId) {
    if (gameState.upgrades.includes(upgradeId)) return false;

    const upgrade = GLOBAL_UPGRADES.find(u => u.id === upgradeId);
    if (!upgrade) return false;
    if (gameState.revenue < upgrade.cost) return false;

    gameState.revenue -= upgrade.cost;
    gameState.upgrades.push(upgradeId);

    showToast(`Purchased ${upgrade.name}!`, 'success');
    saveGame();
    renderUI();
    return true;
}

function performPrestige() {
    const insight = getPrestigeInsight();
    if (insight <= 0) return false;

    gameState.logisticsInsight += insight;
    gameState.prestigeCount++;

    // Reset progress but keep insight and prestige count
    const savedInsight = gameState.logisticsInsight;
    const savedPrestige = gameState.prestigeCount;
    const savedPlayTime = gameState.playTime;

    gameState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    gameState.logisticsInsight = savedInsight;
    gameState.prestigeCount = savedPrestige;
    gameState.playTime = savedPlayTime;
    gameState.lastSaveTime = Date.now();
    gameState.lastTickTime = Date.now();

    // Unlock first domain
    initializeDomainState('manual');
    gameState.domains.manual.unlocked = true;
    gameState.expandedDomains = ['manual'];

    showToast(`Re-Architected! Gained ${insight} Insight`, 'success');
    saveGame();
    renderUI();
    return true;
}

function shipIt() {
    const value = getClickValue();
    gameState.revenue += value;
    gameState.lifetimeRevenue += value;
    gameState.totalShipments += 1;
    gameState.manualShips += 1;

    // Create floating number
    createFloatingNumber(value);

    // Button animation
    const btn = document.getElementById('ship-it-btn');
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);

    renderStats();
}

// ============================================================================
// GAME LOOP
// ============================================================================

function gameTick() {
    const now = Date.now();
    const deltaMs = now - gameState.lastTickTime;
    const deltaSec = deltaMs / 1000;

    gameState.lastTickTime = now;
    gameState.playTime += deltaSec;

    const sps = getTotalSPS();
    const earned = sps * deltaSec;

    gameState.revenue += earned;
    gameState.lifetimeRevenue += earned;
    gameState.totalShipments += earned;

    renderStats();

    // Auto-save every 30 seconds
    if (now - gameState.lastSaveTime > 30000) {
        saveGame();
    }
}

function calculateOfflineProgress(offlineMs) {
    // Cap offline progress at 24 hours
    const maxOffline = 24 * 60 * 60 * 1000;
    const cappedMs = Math.min(offlineMs, maxOffline);
    const offlineSec = cappedMs / 1000;

    // 50% efficiency while offline
    const sps = getTotalSPS();
    return sps * offlineSec * 0.5;
}

// ============================================================================
// SAVE/LOAD
// ============================================================================

function saveGame() {
    gameState.lastSaveTime = Date.now();
    try {
        localStorage.setItem('shipItSave', JSON.stringify(gameState));
    } catch (e) {
        console.error('Failed to save game:', e);
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('shipItSave');
        if (saved) {
            const parsed = JSON.parse(saved);
            gameState = { ...JSON.parse(JSON.stringify(DEFAULT_STATE)), ...parsed };

            // Calculate offline progress
            const offlineMs = Date.now() - gameState.lastTickTime;
            if (offlineMs > 60000) { // More than 1 minute offline
                const offlineEarnings = calculateOfflineProgress(offlineMs);
                if (offlineEarnings > 0) {
                    gameState.revenue += offlineEarnings;
                    gameState.lifetimeRevenue += offlineEarnings;
                    gameState.totalShipments += offlineEarnings;
                    showOfflineModal(offlineEarnings);
                }
            }

            gameState.lastTickTime = Date.now();
            return true;
        }
    } catch (e) {
        console.error('Failed to load game:', e);
    }
    return false;
}

function resetGame() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone!')) {
        localStorage.removeItem('shipItSave');
        gameState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        initializeGame();
        renderUI();
        showToast('Game reset!', 'warning');
    }
}

// ============================================================================
// UI RENDERING
// ============================================================================

function renderStats() {
    document.getElementById('revenue').textContent = formatCurrency(gameState.revenue);
    document.getElementById('sps').textContent = formatNumber(getTotalSPS()) + '/s';

    const globalMult = getGlobalMultiplier();
    const multiplierDisplay = document.getElementById('multiplier-display');
    if (globalMult > 1) {
        multiplierDisplay.style.display = 'flex';
        document.getElementById('global-multiplier').textContent = globalMult.toFixed(2) + 'x';
    } else {
        multiplierDisplay.style.display = 'none';
    }
}

function renderDomains() {
    const feed = document.getElementById('logistics-feed');
    feed.innerHTML = '';

    for (let domainIndex = 0; domainIndex < DOMAINS.length; domainIndex++) {
        const domain = DOMAINS[domainIndex];
        initializeDomainState(domain.id);

        const domainState = gameState.domains[domain.id];
        const isUnlocked = domainState.unlocked;
        const isExpanded = gameState.expandedDomains.includes(domain.id);

        // Check if this domain should be visible (previous domain unlocked or first)
        const prevDomain = domainIndex > 0 ? DOMAINS[domainIndex - 1] : null;
        const prevUnlocked = !prevDomain || (gameState.domains[prevDomain.id]?.unlocked);

        if (!prevUnlocked && !isUnlocked) continue;

        const card = document.createElement('div');
        card.className = `domain-card${isUnlocked ? '' : ' locked'}${isExpanded ? ' expanded' : ''}`;
        card.dataset.domain = domain.id;

        const totalUnits = domainState.units.reduce((a, b) => a + b, 0);
        const domainSPS = getDomainSPS(domain.id);

        card.innerHTML = `
            <div class="domain-header">
                <div class="domain-info">
                    <div class="domain-icon">${domain.icon}</div>
                    <div class="domain-text">
                        <h3>${domain.name}</h3>
                        <small>${isUnlocked ? domain.description : `Unlock: ${formatCurrency(domain.unlockCost)}`}</small>
                    </div>
                </div>
                <div class="domain-stats">
                    ${isUnlocked ? `
                        <div class="domain-sps">${formatNumber(domainSPS)}/s</div>
                        <div class="domain-count">${totalUnits} units</div>
                    ` : `
                        <button class="unit-buy-btn" onclick="unlockDomain('${domain.id}')" ${gameState.revenue >= domain.unlockCost ? '' : 'disabled'}>
                            Unlock
                        </button>
                    `}
                </div>
                ${isUnlocked ? '<span class="domain-chevron">▼</span>' : ''}
            </div>
            ${isUnlocked ? `<div class="domain-units">${renderUnits(domainIndex, domain, domainState)}</div>` : ''}
        `;

        if (isUnlocked) {
            card.querySelector('.domain-header').addEventListener('click', () => {
                toggleDomain(domain.id);
            });
        }

        feed.appendChild(card);
    }
}

function renderUnits(domainIndex, domain, domainState) {
    let html = '';

    for (let unitIndex = 0; unitIndex < domain.units.length; unitIndex++) {
        const unit = domain.units[unitIndex];
        const count = domainState.units[unitIndex] || 0;
        const cost = getUnitCost(domainIndex, unitIndex, count);
        const sps = getUnitSPS(domainIndex, unitIndex, count);
        const tier = getUnitTier(count);
        const canAfford = gameState.revenue >= cost;

        // Lock units until previous tier has at least 1
        const isLocked = unitIndex > 0 && domainState.units[unitIndex - 1] === 0;

        html += `
            <div class="unit-card${count > 0 ? ' owned' : ''}${canAfford && !isLocked ? ' affordable' : ''}${isLocked ? ' locked' : ''}"
                 data-domain="${domain.id}" data-unit="${unitIndex}">
                ${tier > 0 ? `<span class="tier-badge">T${tier + 1}</span>` : ''}
                <div class="unit-icon">${unit.icon}</div>
                <div class="unit-details">
                    <div class="unit-name">${unit.name}</div>
                    ${tier > 0 ? `<div class="unit-tier">Tier ${tier + 1} (${getTierMultiplier(tier)}x power)</div>` : ''}
                    <div class="unit-production">
                        ${count > 0 ? `Producing <span>${formatNumber(sps)}/s</span>` : `Base: <span>${formatNumber(unit.baseSPS)}/s</span>`}
                    </div>
                </div>
                <div class="unit-actions">
                    <div class="unit-count">${count}</div>
                    <button class="unit-buy-btn" onclick="buyUnit('${domain.id}', ${unitIndex})" ${canAfford && !isLocked ? '' : 'disabled'}>
                        ${formatCurrency(cost)}
                    </button>
                </div>
            </div>
        `;
    }

    return html;
}

function renderUpgrades() {
    const list = document.getElementById('upgrades-list');
    list.innerHTML = '';

    for (const upgrade of GLOBAL_UPGRADES) {
        const isPurchased = gameState.upgrades.includes(upgrade.id);
        const canAfford = gameState.revenue >= upgrade.cost;

        const card = document.createElement('div');
        card.className = `upgrade-card${isPurchased ? ' purchased' : ''}`;
        card.innerHTML = `
            <div class="upgrade-icon">${upgrade.icon}</div>
            <div class="upgrade-details">
                <div class="upgrade-name">${upgrade.name}</div>
                <div class="upgrade-desc">${upgrade.desc}</div>
            </div>
            ${isPurchased ? '<span style="color: var(--accent-success);">Owned</span>' : `
                <button class="upgrade-btn" onclick="purchaseUpgrade('${upgrade.id}')" ${canAfford ? '' : 'disabled'}>
                    ${formatCurrency(upgrade.cost)}
                </button>
            `}
        `;
        list.appendChild(card);
    }
}

function renderPrestige() {
    const currentInsight = gameState.logisticsInsight;
    const pendingInsight = getPrestigeInsight();
    const insightBonus = getInsightMultiplier();

    document.getElementById('current-insight').textContent = currentInsight;
    document.getElementById('insight-on-reset').textContent = '+' + pendingInsight;
    document.getElementById('insight-bonus').textContent = insightBonus.toFixed(2) + 'x';

    const btn = document.getElementById('prestige-btn');
    btn.disabled = pendingInsight <= 0;
}

function renderStatsPanel() {
    document.getElementById('stat-total-shipments').textContent = formatNumber(gameState.totalShipments);
    document.getElementById('stat-lifetime-revenue').textContent = formatCurrency(gameState.lifetimeRevenue);
    document.getElementById('stat-manual-ships').textContent = formatNumber(gameState.manualShips);
    document.getElementById('stat-playtime').textContent = formatTime(gameState.playTime);
    document.getElementById('stat-prestige-count').textContent = gameState.prestigeCount;

    // Count total units
    let totalUnits = 0;
    let highestTier = '-';
    let highestTierNum = -1;

    for (const domain of DOMAINS) {
        const domainState = gameState.domains[domain.id];
        if (domainState) {
            for (let i = 0; i < domainState.units.length; i++) {
                const count = domainState.units[i] || 0;
                totalUnits += count;
                const tier = getUnitTier(count);
                if (tier > highestTierNum && count > 0) {
                    highestTierNum = tier;
                    highestTier = `${domain.units[i].name} T${tier + 1}`;
                }
            }
        }
    }

    document.getElementById('stat-units-owned').textContent = totalUnits;
    document.getElementById('stat-highest-tier').textContent = highestTier;
}

function renderUI() {
    renderStats();
    renderDomains();
    renderUpgrades();
    renderPrestige();
    renderStatsPanel();
}

// ============================================================================
// UI INTERACTIONS
// ============================================================================

function toggleDomain(domainId) {
    const index = gameState.expandedDomains.indexOf(domainId);
    if (index >= 0) {
        gameState.expandedDomains.splice(index, 1);
    } else {
        gameState.expandedDomains.push(domainId);
    }
    renderDomains();
}

function switchTab(tabName) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Show/hide panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.style.display = 'none';
    });

    const mainContent = document.querySelector('.main-content');
    const shipItBtn = document.getElementById('ship-it-btn');

    if (tabName === 'logistics') {
        mainContent.style.display = 'block';
        shipItBtn.style.display = 'flex';
    } else {
        mainContent.style.display = 'none';
        shipItBtn.style.display = 'none';
        document.getElementById(`${tabName}-panel`).style.display = 'block';
    }

    // Refresh panel content
    if (tabName === 'upgrades') renderUpgrades();
    if (tabName === 'prestige') renderPrestige();
    if (tabName === 'stats') renderStatsPanel();
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

function showOfflineModal(earnings) {
    const modal = document.getElementById('offline-modal');
    document.getElementById('offline-earnings').textContent = formatCurrency(earnings);
    modal.style.display = 'flex';
}

function createFloatingNumber(value) {
    const btn = document.getElementById('ship-it-btn');
    const rect = btn.getBoundingClientRect();

    const float = document.createElement('div');
    float.className = 'float-number';
    float.textContent = '+' + formatCurrency(value);
    float.style.left = rect.left + rect.width / 2 + 'px';
    float.style.top = rect.top + 'px';

    document.body.appendChild(float);

    setTimeout(() => float.remove(), 1000);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function initializeGame() {
    // Initialize first domain as unlocked
    initializeDomainState('manual');
    gameState.domains.manual.unlocked = true;

    // Set initial timestamps
    gameState.lastSaveTime = Date.now();
    gameState.lastTickTime = Date.now();
}

function setupEventListeners() {
    // Ship It button
    document.getElementById('ship-it-btn').addEventListener('click', shipIt);

    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Prestige button
    document.getElementById('prestige-btn').addEventListener('click', performPrestige);

    // Offline modal
    document.getElementById('offline-dismiss').addEventListener('click', () => {
        document.getElementById('offline-modal').style.display = 'none';
    });

    // Keyboard shortcuts (for desktop)
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            shipIt();
        }
    });

    // Save before unload
    window.addEventListener('beforeunload', saveGame);

    // Visibility change (pause/resume)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            saveGame();
        } else {
            // Calculate any offline progress
            const offlineMs = Date.now() - gameState.lastTickTime;
            if (offlineMs > 60000) {
                const earnings = calculateOfflineProgress(offlineMs);
                if (earnings > 0) {
                    gameState.revenue += earnings;
                    gameState.lifetimeRevenue += earnings;
                    gameState.totalShipments += earnings;
                    showToast(`Earned ${formatCurrency(earnings)} while away!`, 'success');
                }
            }
            gameState.lastTickTime = Date.now();
            renderUI();
        }
    });
}

// Start the game
document.addEventListener('DOMContentLoaded', () => {
    const loaded = loadGame();

    if (!loaded) {
        initializeGame();
    }

    setupEventListeners();
    renderUI();

    // Main game loop - 10 ticks per second
    setInterval(gameTick, 100);

    // UI refresh - 2 times per second
    setInterval(renderUI, 500);

    console.log('Ship It initialized! Ready to build your logistics empire.');
});
